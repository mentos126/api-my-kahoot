import repository from '../repositories/MeetingRepository.js'
import { meetingStatus, playerInPlayers } from '../helpers/meeting.js'

export const meetingSockets = (socket, io) => {
  socket.on('getMeetingPlayers', ({ meetingIdentifier, player }) => {
    repository.findByIdentifier(meetingIdentifier)
      .then(meeting => {
        if (
          meeting &&
          player &&
          !playerInPlayers(meeting.players, player._id) &&
          meeting.status === meetingStatus.INITIALIZED &&
          meeting.author !== player._id
        ) {
          const newPlayerList = [...meeting.players, player]
          io.to(meeting.identifier).emit('getPlayers', newPlayerList)
          repository.updateById(meeting._id, { players: newPlayerList }).then(res => res)
        } else {
          io.to(meeting.identifier).emit('getPlayers', meeting.players)
        }
      })
  })

  socket.on('deleteMeetingPlayer', ({ meetingIdentifier, player }) => {
    repository.findByIdentifier(meetingIdentifier)
      .then(meeting => {
        if (meeting && meeting.status === meetingStatus.INITIALIZED) {
          if (playerInPlayers(meeting.players, player._id)) {
            const newPlayerList = meeting.players.filter(p => p._id !== player._id)
            io.to(meeting.identifier).emit('getPlayers', newPlayerList)
            io.to(meeting.identifier).emit('deletedMeetingPlayer', player)
            repository.updateById(meeting._id, { players: newPlayerList }).then(res => res)
          } else {
            io.to(meeting.identifier).emit('getPlayers', meeting.players)
          }
        }
      })
      .catch(() => { io.to(meetingIdentifier).emit('getPlayers', player) })
  })

  socket.on('launchGame', ({ meetingIdentifier }) => {
    repository.findByIdentifier(meetingIdentifier)
      .then(meeting => {
        const newMeeting = {
          author: meeting.author,
          identifier: meeting.identifier,
          status: meetingStatus.STARTED,
          players: meeting.players.map(p => ({
            ...p,
            score: 0
          })),
          questions: meeting.questions,
          questionsIndex: 0,
          step: 'loading',
          stats: [],
          counter: [],
          selection: [],
          inWaiting: []
        }
        repository.updateById(meeting._id, newMeeting).then(() => {
          io.to(meetingIdentifier).emit('launchGame')
        })
      })
  })

  socket.on('gameInit', ({ token, meetingIdentifier }) => {
    repository.findByIdentifier(meetingIdentifier)
      .then(meeting => {
        if (playerInPlayers(meeting.players, token) && !meeting.counter.includes(token)) {
          meeting.counter.push(token)
        }

        if (meeting.step !== 'loading') {
          io.to(meetingIdentifier).emit('game', meeting)
          repository.updateById(meeting._id, meeting).then(res => res)
          return
        }

        if (meeting.counter.length >= meeting.players.length) {
          meeting.counter = []
          meeting.selection = []
          meeting.step = 'first-dice'
        }

        io.to(meetingIdentifier).emit('game', meeting)
        repository.updateById(meeting._id, meeting).then(res => res)
      })
  })

  socket.on('chooseResponse', ({ token, meetingIdentifier, payload, time }) => {
    repository.findByIdentifier(meetingIdentifier)
      .then(meeting => {
        if (playerInPlayers(meeting.players, token) && !meeting.counter.includes(token)) {
          meeting.counter.push(token)
          meeting.stats.push(payload)
          meeting.players.map(p => {
            if (p._id === token && payload === meeting.questions[meeting.questionsIndex].response) {
              const thirtySecondsInMilliSeconds = 30 * 1000
              const now = new Date()
              const res = Math.trunc((thirtySecondsInMilliSeconds - (now - meeting.time.getTime())) / 100)

              p.score = p.score + res
            }

            return p
          })
        }

        if (meeting.counter.length >= meeting.players.length) {
          meeting.counter = []
          meeting.selection = []
          meeting.step = 'stats'
        }

        io.to(meetingIdentifier).emit('game', meeting)
        repository.updateById(meeting._id, meeting).then(res => res)
      })
  })

  socket.on('nextStep', ({ token, meetingIdentifier }) => {
    repository.findByIdentifier(meetingIdentifier)
      .then(meeting => {
        if (meeting.author !== token) {
          return
        }

        if (meeting.step === 'loading') {
          meeting.counter = []
          meeting.selection = []
          const now = new Date()
          meeting.timeToGo = (new Date(now)).setSeconds(now.getSeconds() + 30)
          meeting.step = 'question'
        } else if (meeting.step === 'question') {
          meeting.step = 'stats'
        } else if (meeting.step === 'stats') {
          meeting.stats = []
          meeting.step = 'podium'
          if (meeting.questionsIndex >= meeting.questions.length - 1) {
            meeting.step = 'final-podium'
          }
        } else if (meeting.step === 'podium') {
          meeting.step = 'dice'
          meeting.questionsIndex = meeting.questionsIndex + 1
        } else if (meeting.step === 'dice' || meeting.step === 'first-dice') {
          meeting.step = 'question'
          meeting.counter = []
          meeting.time = new Date()
          const now = new Date()
          meeting.timeToGo = (new Date(now)).setSeconds(now.getSeconds() + 30)
        }

        io.to(meetingIdentifier).emit('game', meeting)
        repository.updateById(meeting._id, meeting).then(res => res)
      })
  })

  socket.on('joinRoom', room => socket.join(room))

  socket.on('leaveRoom', room => socket.leave(room))
}

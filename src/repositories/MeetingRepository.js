import Meeting from '../models/Meeting.js'
import { meetingStatus } from '../helpers/meeting.js'
import { shuffleQuestions } from '../helpers/questions.js'

class MeetingRepository {
  constructor (model) {
    this.model = model
  }

  create (author) {
    const newMeeting = {
      author,
      players: [],
      status: meetingStatus.INITIALIZED,
      questions: shuffleQuestions(),
      questionsIndex: 0,
      step: 'loading',
      stats: [],
      counter: [],
      selection: [],
      inWaiting: []
    }
    const meeting = new Meeting(newMeeting)

    return meeting.save()
  }

  findAll () {
    return this.model.find()
  }

  findById (id) {
    return this.model.findById(id)
  }

  async findByIdentifier (identifier) {
    return this.model.findOne({ identifier })
  }

  deleteById (id) {
    return this.model.findByIdAndDelete(id)
  }

  updateById (id, meeting) {
    const query = { _id: id }
    return this.model.findOneAndUpdate(query, {
      $set: meeting
    })
  }
}

const repository = new MeetingRepository(Meeting)

export default repository

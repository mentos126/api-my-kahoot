import express from 'express'

import repository from '../repositories/MeetingRepository.js'

const router = express.Router()

router.get('/:id', (req, res) => {
  repository.findByIdentifier(req.params.id)
    .then(meeting => res.json(meeting))
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const author = req.body.player
  repository.create(author)
    .then(meeting => res.json(meeting))
    .catch(error => console.log(error))
})

router.get('/:id/player/:player/is-contributor', (req, res) => {
  const { id, player } = req.params
  repository.findByIdentifier(id)
    .then(meeting => {
      res.json(meeting.author === player)
    })
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  repository.deleteById(id)
    .then(() => res.status(200).json([]))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const meeting = {
    players: req.body.players,
    attributedRoles: req.body.attributedRoles
  }
  repository.updateById(id, meeting)
    .then(() => res.status(200).json([]))
    .catch(error => console.log(error))
})

export default router

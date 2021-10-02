import repository from '../repositories/PlayerRepository.js'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  repository.findAll()
    .then(players => res.json(players))
    .catch(error => console.log(error))
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  repository.findById(id)
    .then(player => res.json(player))
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const { username, picture } = req.body
  repository.create(username, picture)
    .then(player => res.json(player))
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
  const player = {
    token: req.body.token,
    username: req.body.username,
    picture: req.body.picture,
    role: req.body.role
  }
  repository.updateById(id, player)
    .then(() => res.status(200).json([]))
    .catch(error => console.log(error))
})

export default router

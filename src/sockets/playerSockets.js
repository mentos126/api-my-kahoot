import repository from '../repositories/PlayerRepository.js'

export const playerSockets = (socket, io) => {
  socket.on('test', player => {
    repository.findAll()
      .then(players => {
        io.emit('test', [...players, player])
      })
      .catch(error => console.log(error))
  })
}

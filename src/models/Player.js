import mongoose from 'mongoose'

const { Schema } = mongoose

const playerSchema = new Schema({
  username: {
    type: String
  },
  picture: {
    type: String
  }
})

const Player = mongoose.model('Player', playerSchema)

export default Player

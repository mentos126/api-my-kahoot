import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import http from 'http'
import mongoose from 'mongoose'
import path from 'path'
import io from 'socket.io'

import meetingRoutes from './src/routes/meetingRoutes.js'
import playerRoutes from './src/routes/playerRoutes.js'
import { meetingSockets } from './src/sockets/meetingSockets.js'
import { playerSockets } from './src/sockets/playerSockets.js'

const configResult = dotenv.config().parsed
const app = express()
const server = http.createServer(app)
const socketIo = io(server)

mongoose.Promise = global.Promise
mongoose.connect(process.env.APP_MONGO_URI ? process.env.APP_MONGO_URI : configResult.APP_MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
})

app.use(cors())
app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(express.json())
app.use('/assets', express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(path.resolve(), 'public')))

app.use('/meeting', meetingRoutes)
app.use('/player', playerRoutes)

try {
  socketIo.set('log level', 0)
  socketIo.on('connection', socket => {
    playerSockets(socket, socketIo)
    meetingSockets(socket, socketIo)
  })
} catch (err) {
  console.error(err)
  throw err
}

server.listen(process.env.PORT ? process.env.PORT : configResult.APP_PORT, () => {
  console.log(`listening on *: ${process.env.PORT ? process.env.PORT : configResult.APP_PORT}`)
})

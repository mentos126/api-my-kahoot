import mongoose from 'mongoose'

const { Schema } = mongoose

const CounterSchema = Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 }
})
const counter = mongoose.model('meeting_counter', CounterSchema)

const meetingSchema = new Schema({
  author: {
    type: String
  },
  identifier: {
    type: Number
  },
  players: {
    type: Array
  },
  status: {
    type: Number
  },
  questions: {
    type: Array
  },
  questionsIndex: {
    type: Number
  },
  step: {
    type: String
  },
  stats: {
    type: Array
  },
  counter: {
    type: Array
  },
  selection: {
    type: Array
  },
  inWaiting: {
    type: Array
  }
})

meetingSchema.pre('save', function (next) {
  if (this.isNew) {
    var doc = this
    counter.findByIdAndUpdate({ _id: 'entityId' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
      .then(function (count) {
        doc.identifier = count.seq
        next()
      })
      .catch(function (error) {
        throw error
      })
  } else {
    next()
  }
})

const Meeting = mongoose.model('Meeting', meetingSchema)

export default Meeting

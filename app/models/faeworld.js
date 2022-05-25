const mongoose = require('mongoose')

const faeworldSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  power: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})


module.exports = mongoose.model('Faeworld', faeworldSchema)

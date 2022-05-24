const mongoose = require('mongoose')

const waterfaerieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  winged: {
    type: Boolean,
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


module.exports = mongoose.model('Waterfaerie', waterfaerieSchema)

const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tag: String,
  comments: [{
    text: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    ikes: [{
      liked: Boolean,
      count: Number,
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
    }],
    comments: [{
      text: String,
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      ikes: [{
        liked: Boolean,
        count: Number,
        owner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        }
      }]
    }]
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema)

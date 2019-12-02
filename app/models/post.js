const mongoose = require('mongoose')

// Post will contain a question created by a signed-in user
// Will have fields for comments made by other users (that can be threaded comments)
// Tags will be used to filter a search by hashtags
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
      // how would `count` increase/decrease??
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
        // how would `count` increase/decrease??
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

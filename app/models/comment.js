const mongoose = require('mongoose')

// Post will contain a question created by a signed-in user
// Will have fields for comments made by other users (that can be threaded comments)
// Tags will be used to filter a search by hashtags
const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  ikes: [{
    liked: Boolean,
    // how would `count` increase/decrease??
    count: Number
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema)

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  token: String
}, {
  timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    },
    virtuals: true
  },
  // virtuals are like serializers in Rails/ActiveRecord
  toJSON: { virtuals: true }
})

userSchema.virtual('userName').get(function () {
  return this.username
})

module.exports = mongoose.model('User', userSchema)

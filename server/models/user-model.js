const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    'First Name': { type: String, required: true },
    'Last Name': { type: String, required: true },
    Country: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: Date, required: true },
    mfa: { type: String },
    amt: { type: Number, required: true },
    createdDate: { type: Date, required: true },
    ReferredBy: { type: String },
  },
  { timestamps: true }
)

module.exports = mongoose.model('users', User)

const mongoose = require('mongoose')

// TODO move this to env variables or some other more secure solution
const uri =
  'mongodb+srv://read:aQ9jqEW2cz4koUC1@cluster0.layyi.mongodb.net/crypto-users?retryWrites=true&w=majority'

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db

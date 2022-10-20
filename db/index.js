const mongoose = require('mongoose')

let MONGO_URI = 'mongodb://127.0.0.1:27017/recipesDatabase'

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.log('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db

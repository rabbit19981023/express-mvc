const mongoose = require('mongoose')
require('dotenv').config()

// Database Config(MongoDB)
const dbConfig = {
  uri: process.env.MONGODB_URI,
  params: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
}
// connecting to database(MongoDB)
mongoose.connect(dbConfig.uri, dbConfig.params)
  .then(() => {
    console.log('Connecting to Database Successfully!')
  })
  .catch((err) => {
    console.error(`Database connected Error:\n${err}`)
  })

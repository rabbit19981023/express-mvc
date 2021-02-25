const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes.js')

// Database Config(MongoDB)
const dbConfig = {
  url: process.env.MONGODB_URL || 'mongodb+srv://admin:smile123@cluster-test.3y2n1.mongodb.net/Cluster-test?retryWrites=true&w=majority',
  params: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
}
// connecting to database(MongoDB)
mongoose.connect(dbConfig.url, dbConfig.params)
  .then(() => {
    console.log('Connecting to Database Successfully!')
  })
  .catch((err) => {
    console.error(`Database connected Error:\n${err}`)
  })

// create a express web application instance
const app = express()

// setting the path of our views directory of MVC architecture
app.set('views', path.resolve(__dirname, 'views'))

// setting the template engine
app.set('view engine', 'ejs')

// checking all Requests received for development purpose
app.use(morgan('dev'))

// fetch JSON Data from received POST Request
app.use(express.json())

// fetch Form Data from received POST Request
app.use(express.urlencoded({ extended: true }))

// the request with the route of '/user/' will be sent to userRoutes handler
app.use('/user/', userRoutes)

// setting the port of the server
const port = process.env.PORT || 3000

// activate the server and be listening the user's request at PORT:3000
app.listen(port, () => {
  console.log(`The Server is Running at PORT:${port}......`)
})

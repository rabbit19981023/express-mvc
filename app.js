const express = require('express')
const path = require('path')
const morgan = require('morgan')
require('dotenv').config()
require('./db.js')
const userRoutes = require('./routes/userRoutes.js')

// create a express web
const app = express()

// setting the views dir of MVC
app.set('views', path.resolve(__dirname, 'views'))

// setting the template engine
app.set('view engine', 'ejs')

// checking all the user requests
app.use(morgan('dev'))

// fetch JSON Data from received POST Request
app.use(express.json())

// fetch Form Data from received POST Request
app.use(express.urlencoded({ extended: true }))

// the request with the route of '/user/' will be sent to userRoutes handler
app.use('/user/', userRoutes)

// setting the Server PORT
const PORT = process.env.PORT

// activate the server and listening to the user's request at PORT:3000
app.listen(PORT, () => {
  console.log(`The Server is Running at PORT:${PORT}......`)
})

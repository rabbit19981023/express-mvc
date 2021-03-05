/** Import Modules **/
import express from 'Express'
import path from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'
import dotenv from 'dotenv'
import db from './db.js'
import userRoutes from './routes/userRoutes.js'

/** Configurations **/
dotenv.config()
db.connect()

const app = express() // create a express application instance

// setting the views dir of MVC
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set('views', path.resolve(__dirname, 'views'))

app.set('view engine', 'ejs') // setting the template engine

/** Middlewares **/
app.use(morgan('dev')) // checking all the user requests in terminal
app.use(express.json()) // fetch JSON Data from received POST Request
app.use(express.urlencoded({ extended: true })) // fetch Form Data from received POST Request

/** Routes **/
app.use('/user/', userRoutes) // the request with the route of '/user/' will be sent to userRoutes handler

/** Activating the Server **/
const PORT = process.env.PORT // setting the Server PORT

app.listen(PORT, () => { console.log(`The Server is Running at PORT:${PORT}......`) })

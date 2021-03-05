import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config() // read the Environment Variables in .env file

export default {
  connect: function () {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
      .then(() => { console.log('Connecting to database successfully!') })
      .catch((error) => { console.error(`Database connected failed:\n${error}`) })
  }
}

const mongoose = require('mongoose')

// design the data fields what we want in this Data Collection(as same as a Data Table in SQL)
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  country: String,
  city: String
})

// create a Collection named 'user' in MongoDB which is according to userSchema
// every userModel is a user instance of userCollection
const UserModel = mongoose.model('user', userSchema)

// declare and define the method of this userModel (Callable APIs)

// get all users in userCollection
const getAllUsers = (callback) => {
  UserModel.find((err, users) => {
    if (err) {
      callback(err, [])
    } else {
      callback(null, users)
    }
  })
}

// add new user to userCollection
const addNewUser = (newUser, callback) => {
  const user = new UserModel({
    firstname: newUser.firstname,
    lastname: newUser.lastname,
    country: newUser.country,
    city: newUser.city
  })

  user.save(callback)
}

// add custom methods (APIs) to userCollection (userModel)
UserModel.getAllUsers = getAllUsers
UserModel.addNewUser = addNewUser

// exports the userCollection
module.exports = UserModel

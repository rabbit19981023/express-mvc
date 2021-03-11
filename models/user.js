import mongoose from 'mongoose'
const { Schema } = mongoose // object destructuring syntax

/** Define the Database Structure **/
// design the data fields what we want in this Data Collection(as same as a Data Table in SQL)
const userSchema = new Schema({
  firstname: String,
  lastname: String,
  country: String,
  city: String
})

// create a Collection named 'user' in MongoDB which is according to userSchema
// every userModel is a user instance of userCollection
const UserModel = mongoose.model('user', userSchema)

/** Define the UserModel APIs **/
// get all users in userCollection
const getAllUsers = (callback) => {
  UserModel.find((error, users) => {
    if (error) {
      return callback(error, [])
    }
    callback(null, users)
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
export default UserModel

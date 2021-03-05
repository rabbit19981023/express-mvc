// import the instance of userModel
import UserModel from '../models/user.js'

// Business Logics
const userController = {
  userHome: (req, res) => {
    UserModel.getAllUsers((error, users) => {
      if (error) {
        console.error(error)
      } else {
        res.render('home', { users: users })
      }
    })
  },
  addUsers: (req, res) => {
    console.log('Form Data Posted is : ' + JSON.stringify(req.body))

    const user = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      country: req.body.country,
      city: req.body.city
    }

    UserModel.addNewUser(user, (error, user) => {
      if (error) {
        console.error(error)
      } else {
        console.log('Added User Successfully! : ' + user)
        res.redirect('/user/home')
      }
    })
  },
  deleteUser: (req, res) => {
    console.log('Deleted User ID is: ' + req.query.userId)

    const filter = {
      _id: req.query.userId
    }

    UserModel.deleteOne(filter, (err) => {
      if (err) {
        console.error(err)
      }
    })
    res.redirect('/user/home')
  }
}

export default userController

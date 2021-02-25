// containing the instance of userModel
const UserModel = require('../models/user.js')

// Business Logics
const userController = {
  userHome: (req, res) => {
    UserModel.getAllUsers((err, users) => {
      if (err) {
        console.error(err)
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

    UserModel.addNewUser(user, (err, user) => {
      if (err) {
        console.error(err)
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

module.exports = userController

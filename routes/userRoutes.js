const express = require('express')
const userController = require('../controller/userController.js')

// express.Router is a class for creating a express route handler instance
const router = express.Router()

// this route handler will be executed on '/user/home' request
// userController will handle all the business logics about this route
router.get('/home', userController.userHome)

// this route handler will be executed on '/user/add' request
router.post('/add', userController.addUsers)

router.get('/delete', userController.deleteUser)

// exports the express.Router instance
module.exports = router

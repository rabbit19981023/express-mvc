import express from 'express'
import userController from '../controller/userController.js'

const router = express.Router() // create a express.Router instance

/** /user/ Routes **/
router.get('/home', userController.userHome)
router.post('/add', userController.addUsers)
router.get('/delete', userController.deleteUser)

// exports the express.Router instance
export default router

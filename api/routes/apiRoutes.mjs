import express from 'express'
import messageController from '../controllers/MessageController'
import userController from '../controllers/UserController'
import connectionController from '../controllers/ConnectionController'

const router = express.Router()

// message
router.get('/message', messageController.read)
router.post('/message', messageController.create)

// user
router.get('/user', userController.get.bind(userController))
router.put(
  '/user/contacts/:name',
  userController.addContact.bind(userController)
)

// connection
router.get('/connection', connectionController.list.bind(connectionController))
router.get(
  '/connection/:id',
  connectionController.findOrCreate(connectionController)
)

export default router

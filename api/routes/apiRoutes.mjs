import express from 'express'
import messageController from '../controllers/MessageController'
import userController from '../controllers/UserController'
import connectionController from '../controllers/ConnectionController'

const router = express.Router()

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
  connectionController.findOrCreate.bind(connectionController)
)

router.get(
  '/connection/:id/message',
  messageController.list.bind(messageController)
)

export default router

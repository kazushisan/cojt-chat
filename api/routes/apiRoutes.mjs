import express from 'express'
import messageController from '../controllers/MessageController'
import userController from '../controllers/UserController'

const router = express.Router()

router.get('/message', messageController.read)
router.post('/message', messageController.create)
router.put(
  '/user/contacts/:name',
  userController.addContact.bind(userController)
)

export default router

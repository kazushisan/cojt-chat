import express from 'express'
import messageController from '../controllers/MessageController'

const router = express.Router()

router.get('/message', messageController.read)
router.post('/message', messageController.create)

export default router

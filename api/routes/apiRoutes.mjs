import express from 'express'
import MessageController from '../controllers/MessageController'

const router = express.Router()

router.get('/message', MessageController.read)

export default router

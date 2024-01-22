import express from 'express'
import { createComment } from '../controller/commentController.js'
import { verifyToken } from '../middleware/createToken.js'
import { commentValidator } from '../utils/commentValidator.js'

export const commentRoutes = express.Router()

commentRoutes.post('/:post_id',commentValidator, verifyToken, createComment)
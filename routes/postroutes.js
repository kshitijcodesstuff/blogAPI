import express from 'express';
import { createPost } from '../controller/postController.js';
import { verifyToken } from '../middleware/createToken.js';

export const postRouter = express.Router();

postRouter.post('/write', verifyToken, createPost);
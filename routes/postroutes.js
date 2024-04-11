import express from 'express';
import { createPost, deletePost, listPosts, readPost, updatePost } from '../controller/postController.js';
import { verifyToken } from '../middleware/createToken.js';

export const postRouter = express.Router();

postRouter.post('/write', verifyToken, createPost);
postRouter.put('/update', verifyToken, updatePost);
postRouter.delete('/delete', verifyToken, deletePost);
postRouter.get('/', verifyToken, listPosts);
postRouter.get('/post', verifyToken, readPost);
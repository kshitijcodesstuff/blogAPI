import express from 'express';
import { createCategory, deleteCategory } from '../controller/categoryController.js';
import { createValidator, deleteValidator } from '../utils/categoryValidator.js';
import { verifyToken } from '../middleware/createToken.js';

export const categoryRoutes = express.Router();

categoryRoutes.post("/create_category", createValidator, verifyToken, createCategory);

categoryRoutes.post("/delete_category", deleteValidator, verifyToken, deleteCategory)
import express from 'express';
import { createCategory } from '../controller/categoryController.js';
import { categoryValidator } from '../utils/categoryValidator.js';

export const categoryRoutes = express.Router();

categoryRoutes.post("/create_category", categoryValidator, createCategory);
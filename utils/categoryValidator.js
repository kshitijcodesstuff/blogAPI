import { body, validationResult } from "express-validator";
import { Category } from "../model/category.js";
import { validatorResult } from "../middleware/validator.js";

export const categoryValidator = [
    body('name')
    .notEmpty().withMessage("Category name cannot be empty")
    .custom(async (name, { req }) => {
        const category = Category.findOne({ where: { name: name }})

        if (category) {
            throw new Error(`Category with name ${ name } already exists`)
        }
        return name
    }),
    validatorResult
]
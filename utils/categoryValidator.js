import { body, validationResult } from "express-validator";
import { Category } from "../model/category.js";
import { validatorResult } from "../middleware/validator.js";

export const createValidator = [
    body('name')
    .notEmpty().withMessage("Category name cannot be empty")
    .custom(async (value) => {
        const category = await Category.findOne({ where: { name: value.toLowerCase() }})

        if (category) {
            throw new Error(`Category with name ${ value } already exists`)
        }
        return value
    }),
    validatorResult
]

export const deleteValidator = [
    body('name')
    .notEmpty().withMessage("Category name cannot be empty"),
    validatorResult
]
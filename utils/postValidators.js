import { body } from "express-validator";


export const postValidator = [
    body("title")
    .notEmpty().withMessage("Title cannot be empty"),
    body('body')
    .notEmpty().withMessage("Body cannot be empty")
]
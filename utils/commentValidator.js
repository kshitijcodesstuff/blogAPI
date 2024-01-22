import { body } from "express-validator";
import { validatorResult } from "../middleware/validator.js";

export const commentValidator = [
    body('content')
    .notEmpty().withMessage("Comment content can't be empty"),
    validatorResult
]
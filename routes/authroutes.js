import express from "express";
import { login, signup } from "../controller/authController.js";
import { loginValidator, signupValidator } from "../utils/authValidators.js";

export const authRouter = express.Router()

authRouter.post('/signup', signupValidator, signup);

authRouter.post('/login', loginValidator, login)
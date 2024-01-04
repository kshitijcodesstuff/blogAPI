import express from "express";
import { signup } from "../controller/signup.js";
import { loginValidator, signupValidator } from "../utils/authValidators.js";
import { login } from "../controller/login.js";

export const authRouter = express.Router()

authRouter.post('/signup', signupValidator, signup);

authRouter.post('/login', loginValidator, login)
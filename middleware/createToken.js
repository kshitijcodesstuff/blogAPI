import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"

dotenv.config()

export const createToken = (user, res, statusCode) => {
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.PRIVATEKEY)

    res.cookie('Bearer', token, {
        httpOnly: true,
        secure: true
    })

    if (statusCode === 200) {
         res.status(statusCode).json({
            status: "Success",
            message: "Login successful"
        })
    } else {
        res.status(statusCode).json({
            status: "Success",
            message: "Signup successful",
            username: user.username,
            email: user.email,
            name: user.name
        })
    }
}

export const verifyToken = (req, res, next) => {
    const token = req.cookies.Bearer;

    const decoded = jwt.verify(token, process.env.PRIVATEKEY, (err, acc) => {
        if (err) {
             return console.log("Unauthorised access");
        }
        req.user = acc;
        next()
    })
}
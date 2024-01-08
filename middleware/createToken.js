import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"

dotenv.config()

// Create a token using jwt auth
export const createToken = (user, res, statusCode) => {
    //user id and role is encoded to create the token
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

// verify user using token
export const verifyToken = (req, res, next) => {
    //Retrieves token from request
    const token = req.cookies.Bearer;

    //token is decrypted with private key to verify user
    const decoded = jwt.verify(token, process.env.PRIVATEKEY, (err, acc) => {
        if (err) {
            res.status(401).json({
                status: "Failed",
                message: "User is not logged in"
            })
        }

        //user is sent back through req if verified
        req.user = acc;
        next()
    })
}
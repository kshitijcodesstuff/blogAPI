import express from 'express'
import bodyParser from 'body-parser'
import db from './config/database.js'
import { authRouter } from './routes/authroutes.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())

db.authenticate()
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log("Unable to connect to database", err))

app.use("/api", authRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running")
})
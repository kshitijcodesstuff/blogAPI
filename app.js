import express from 'express'
import bodyParser from 'body-parser'
import db from './config/database.js'
import cookieParser from 'cookie-parser'
import { authRouter } from './routes/authroutes.js'
import { postRouter } from './routes/postroutes.js'
import { categoryRoutes } from './routes/categoryroutes.js'
import { commentRoutes } from './routes/commentroutes.js'

const app = express()

app.use(express.json())
app.use(cookieParser())

db.authenticate()
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log("Unable to connect to database", err))

app.use("/api/auth", authRouter);
app.use("/api", postRouter);
app.use("/api", categoryRoutes);
app.use("/api/post", commentRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running")
})
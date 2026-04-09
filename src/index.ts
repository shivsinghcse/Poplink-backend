import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
mongoose.connect(process.env.DB!)

import express from 'express'
import cors from 'cors'
import { AuthRouter } from './router/auth.router'
const app = express()
app.listen(
    process.env.PORT || 8080,
    () => console.log(`Server is running on port ${process.env.PORT}`)
)

app.use(cors({
    origin: [
        process.env.CLIENT as string
    ]
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/auth', AuthRouter)


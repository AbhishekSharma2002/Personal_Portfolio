import express from "express"
import cors from 'cors'
import cookieParser from 'cookie-parser'    // to cookies set and access


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({extended: true, limit: '16kb'}))             // extended = object ke andar objest de sakte hai
app.use(express.static("public"))
app.use(cookieParser())
export{ app } 
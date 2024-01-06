import dotenv from 'dotenv'
import connectDB from './db/index.js'

// import mongoose from "mongoose";
// import { DB_NAME } from "./src/constants";


dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDB connection failed", err)
})








/*
//express connection is not responed #express error
import express from 'express'
const app = express();

// you are communicate with data base use try and catach method
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        // #express error
        app.on("error", (error)=>{
            console.log("ERR ", error)
            throw error
        })
        app.listen(process.env.PORT, () =>{
            console.log(`app is listeing on port ${process.env.PORT}` )
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/
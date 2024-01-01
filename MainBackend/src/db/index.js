import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
       const connectionInstant = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB Host: ${connectionInstant.connection.host}`)   // connection.host konse host per connect ho rha hai
    } catch (error) {
        console.log("mongoDB connection Failed: ", error)
        process.exit(1)
    }
}

export default connectDB
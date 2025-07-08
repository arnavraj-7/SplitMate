import mongoose from "mongoose";
import { configDotenv } from 'dotenv'


configDotenv()

const connectDB = async()=>{
    try{
        if(process.env.MONGO_URL === undefined){
            throw new Error("MONGO_URL is not defined in .env file");
            
        }
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(connection.connection.name)
    }catch(error){
        console.log("Error in connecting to database:",error)
        throw new Error ("Error in connecting to database")
    }
}

export default connectDB
import mongoose from "mongoose";

const connectDB = async()=>{

    try{
        mongoose.connection.on("connected",()=>{
            console.log("MongoDB connected Sucessfully....");
        })
        //carRental - is mongoDb database name
        await mongoose.connect(`${process.env.MONGODB_URI}car-rental`)
    }catch(error){
        console.log(error.message);
    }
}
export default connectDB;
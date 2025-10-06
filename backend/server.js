import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "../backend/routes/userRoutes.js"
///Initialize express app
const app = express();
//Middleware
app.use(cors());
app.use(express.json());

//connect DataBase
await connectDB()
app.get('/',(req,res)=>{
    res.send("Server is Running")
})
//import userRouter
app.use("/api/user",userRoutes)
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server Running On ${PORT}`);
})
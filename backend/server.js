import express from "express";
import "dotenv/config";
import cors from "cors";

///Initialize express app
const app = express();
//Middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Server is Running")
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server Running On ${PORT}`);
})
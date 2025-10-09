import User from "../model/User.js";
import jwt from "jsonwebtoken";

export const protect = async (req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({success:false, message:"Not authorized"});
    }
    try{
        // verify token and get payload
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // decoded will contain userId string if your token was just the userId
        // or decoded._id if your payload was an object with _id
        const userId = typeof decoded === "string" ? decoded : decoded.userId || decoded._id;

        if(!userId){
            return res.status(401).json({success: false, message:"User not authorized"});
        }

        req.user = await User.findById(userId).select("-password");
        next();
    } catch(error){
        console.log(error.message)
        return res.status(401).json({success: false , message:"Authorization failed"});
    }
}

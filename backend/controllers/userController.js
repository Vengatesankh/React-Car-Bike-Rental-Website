import User from "../model/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//Generate JWT Token
const generateToken = (userId)=>{
    const payload = userId;
    return jwt.sign(payload,process.env.JWT_SECRET)
}
//New User Registeration
export const registerUser = async (req,res)=>{
    try{
        const {name,email,password} = req.body;

        if(!name || !email || !password || password.length < 8){
            return res.status(404).json({success:false, message:"Fill all the fields, all Required"})
        }
       //check the User already exists or Not
        const userExists = await User.findOne({email})
        if(userExists){
            return res.json({success:false, message:"User Already Exists"})
        }
        //hasedpassword
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = await User.create({name,email,password:hashedPassword})
        const token = generateToken(newUser._id.toString());
        res.status(201).json({success:true, token})

    }catch(error){
        console.log(error.message);
        res.status(404).json({success:false,message:"New User Created Failed",mistake:error.message})
    }
}

//2.Login User
export const loginUser = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({success:false,message:"User is Not Found"})
        }
        const isMatched = await bcrypt.compare(password,user.password);
        if(!isMatched){
            return res.status(404).json({success:false, message:"Invalid Credentials"})
        }
        const token = generateToken(user._id.toString())
        res.status(200).json({success:true,token})
    }catch(error){
         console.log(error.message);
        res.status(404).json({success:false,message:" User Login Failed",mistake:error.message})
    }
}
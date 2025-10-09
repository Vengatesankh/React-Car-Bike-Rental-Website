import imageKit from "../config/imageKit.js";
import Car from "../model/Car.js";
import User from "../model/User.js";
import fs from "fs";
export const changeRoleToOwner = async (req,res)=>{
    try{
        const {_id} = req.user;
        await User.findByIdAndUpdate(_id, {role:"owner"})
        res.json({success: true , message:"Now your list your cars"})
    }catch(error){
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}

//API to list car
export const addCar = async (req,res)=>{
    try {
        const {_id} = req.user;
        let car = JSON.parse(req.body.carData);
        const imageFile = req.file;

        //upload image to imageKit
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response =  await imageKit.upload({
            file:fileBuffer,
            fileName: imageFile.originalname,
            folder: '/cars'
        })

        //optimization through imagekit url transformation
        var optimizedImageUrl = imageKit.url({
            path:response.filePath,
            transformation: [
                {width: '1280'}, //width resizing
                {quality:'auto'}, //auto compression
                {format: 'webp'} //convert to modern format
            ]
        })
        const image = optimizedImageUrl;
        await Car.create({...car, owner:_id, image})

        res.json({success:true,message: "Car Added"})
    } catch (error) {
        console.log(error.message);
        res.json({success:false , message:error.message})
    }
}

//API to List owner Cars

export const getOwnerCars = async (req,res)=>{
    try {
        const {_id} = req.user;
        const cars = await Car.find({owner:_id})
        res.json({success:true,cars})
    } catch (error) {
        console.log(error.message);
        res.json({success:false , message:error.message})
    }
}

//API to toggle car availability
export const toggleCarAvailability = async (req,res)=>{
    try{
        const {_id} =req.user;
        const {carId} = req.body;
        const car = await Car.findById(carId);

        //check is car belongs to the user
        if(car.owner.toString() !== _id.toString()){
            return res.json({success:false,message:"unauthorized"})
        }
        car.isAvailable = !car.isAvailable;
        await car.save()

        res.json({success:true, message:"Availability toggled"})
    }catch(error){
         console.log(error.message);
        res.json({success:false , message:error.message})
    }
}

//delete a car
export const deleteCar = async (req,res)=>{
    try{
        const {_id} =req.user;
        const {carId} = req.body;
        const car = await Car.findById(carId);

        //check is car belongs to the user
        if(car.owner.toString() !== _id.toString()){
            return res.json({success:false,message:"unauthorized"})
        }
        car.owner = null;
        car.isAvailable = false;
        await car.save()

        res.json({success:true, message:"Car removed"})
    }catch(error){
         console.log(error.message);
        res.json({success:false , message:error.message})
    }
}

//API to get Dashboard Data
export const getDashboardData = async (req,res)=>{
    try {
        const {_id,role} = req.user;
        
        if(role !== "owner"){
            return res.json({success:false, message:"unauthorized"})
        }

        const cars = await Car.find({owner:_id});
    } catch (error) {
        console.log(error.message);
        res.json({success:false , message:error.message})
    }
}

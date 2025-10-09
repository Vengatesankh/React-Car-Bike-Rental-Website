


//function to check availability of car for a given date

import Booking from "../model/Booking.js"
import Car from "../model/Car.js";

const checkAvailability = async (car,pickupDate,returnDate)=>{
    const  booking = await Booking.find({
        car,
        pickupDate: {$lte: returnDate},
        returnDate: {$gte: pickupDate}
    })
    return booking.length === 0;
}

//API to check Availability of cars for the given Date and Location
export const checkAvailabilityofCar = async (req,res)=>{
    try {
        const {location,pickupDate,returnDate} = req.body;

        //fetch all available cars for the given location
        const cars = await Car.find({location, isAvailable: true})
        //check car availability for the given date range using promist
        const availableCarsPromises = cars.map(async (car)=>{
            const isAvailable = await checkAvailability(car._id,pickupDate,returnDate)
            return {...car._doc, isAvailable:isAvailable}
        })
        let availableCars = await Promise.all(availableCarsPromises);
        availableCars = availableCars.filter(car => car.isAvailable === true)

        res.json({success:true,availableCars})
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
}
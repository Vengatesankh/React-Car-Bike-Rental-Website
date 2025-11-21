import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
///Initialize express app
const app = express();
//Middleware
app.use(cors());
app.use(express.json());

//connect DataBase
connectDB();
app.get("/", (req, res) => {
  res.send("Server is Running");
});
//import userRouter
app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/booking", bookingRouter);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`);
});

//API LINKS

//1.USER ROUTES
//1.http://localhost:3000/api/user/register - POST
//2.http://localhost:3000/api/user/login - POST
//3.http://localhost:3000/api/user/data - GET

//2.booking routes
//.http://localhost:3000/api/booking/check-availability - POST
//.http://localhost:3000/api/booking/create - POST
//.http://localhost:3000/api/booking/user - GET
//.http://localhost:3000/api/booking/owner - GET
//.http://localhost:3000/api/booking/change-status - POST

//3.Owner Routes
//.http://localhost:3000/api/owner/changerole - POST
//.http://localhost:3000/api/owner/add-car - POST
//.http://localhost:3000/api/owner/cars - GET
//.http://localhost:3000/api/owner/toggle-car- POST
//.http://localhost:3000/api/owner/delete-car  - POST
//.http://localhost:3000/api/owner/dashboard - GET
//.http://localhost:3000/api/owner/update-image - POST

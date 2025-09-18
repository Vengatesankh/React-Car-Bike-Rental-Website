import React, { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import About from "./Pages/MyBookings";
import MyBookings from "./Pages/MyBookings";
import CarDetails from "./Pages/CarDetails";
import Footer from "./Components/Footer";
import Layout from "./Pages/owner/Layout";
import Dashboard from "./Pages/owner/Dashboard";
import { AddCar } from "./Pages/owner/AddCar";
import ManageCar from "./Pages/owner/ManageCar";
import ManageBoking from "./Pages/owner/ManageBoking";
import Login from "./Components/Login";

const App = () => {
  const [showlogon, setShowlogin] = useState(false);
  const isOwnerpath = useLocation().pathname.startsWith("/owner");
  return (
    <div>
      {showlogon && <Login setShowlogin={setShowlogin} />}

      {!isOwnerpath && <Navbar setShowlogin={setShowlogin} />}
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />}></Route>
        <Route path="/cars" element={<Cars />} />
        <Route path="/mybooking" element={<MyBookings />} />
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCar />} />
          <Route path="manage-bookings" element={<ManageBoking />} />
        </Route>
      </Routes>
      {!isOwnerpath && <Footer />}
    </div>
  );
};

export default App;

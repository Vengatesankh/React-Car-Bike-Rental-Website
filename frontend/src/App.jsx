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
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
const App = () => {
  // const [showlogon, setShowlogin] = useState(false);
  const { showLogin } = useAppContext();
  const isOwnerpath = useLocation().pathname.startsWith("/owner");
  return (
    <div>
      <Toaster />
      {showLogin && <Login />}

      {!isOwnerpath && <Navbar />}
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

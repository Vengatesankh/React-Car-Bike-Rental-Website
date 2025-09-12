import React, { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import About from "./Pages/MyBookings";
import MyBookings from "./Pages/MyBookings";
import CarDetails from "./Pages/CarDetails";
import Footer from "./Components/Footer";

const App = () => {
  const [showlogon, setShowlogin] = useState(false);
  const isOwnerpath = useLocation().pathname.startsWith("/owner");
  return (
    <div>
      {!isOwnerpath && <Navbar setShowlogin={setShowlogin} />}
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />}></Route>
        <Route path="/cars" element={<Cars />} />
        <Route path="/mybooking" element={<MyBookings />} />
      </Routes>
      {!isOwnerpath && <Footer />}
    </div>
  );
};

export default App;

import React from "react";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import About from "./Pages/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

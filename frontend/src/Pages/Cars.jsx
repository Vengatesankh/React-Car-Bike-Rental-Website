import React, { useState } from "react";
import Title from "../Components/Title";
import { assets, dummyCarData } from "../assets/assets";
import CarCart from "../Components/CarCart";
const Cars = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      {/* ----search-Bar--- */}
      <div className="flex flex-col items-center py-20 bg-gray-100 max-md:px-4">
        <Title
          title={"Available Cars and Bikes"}
          subTitle={
            "Browse our selection of premium vechicles available for your next adventure"
          }
        />
        {/* --input box-- */}
        <div className="flex  items-center bg-white px-4 mt-6 max-w-140 w-full  h-12 rounded-full shadow">
          <img
            src={assets.search_icon}
            alt="icon"
            className="w-4.5 h-4.5 mr-2"
          />
          <input
            onClick={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search by make, model, or features"
            className="w-full h-full outline-none text-gray-500"
          />
          <img
            src={assets.filter_icon}
            alt="filter"
            className="w-4.5 h-4.5 ml-2"
          />
        </div>
      </div>
      {/* ----All-available-Cars--- */}
      <div className="px-6  md:px-16 lg:px-24 xl:px-32 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
          {dummyCarData.map((car, index) => (
            <div key={index}>
              <CarCart car={car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;

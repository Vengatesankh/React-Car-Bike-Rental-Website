import React from "react";
import Title from "./Title";
import { assets, dummyCarData } from "../assets/assets";
import CarCart from "./CarCart";
import { useNavigate } from "react-router-dom";
const FeatureSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32">
      <div>
        <Title
          title="Featured Vechicles"
          subTitle="Explore our selection of premium vahicles available for your next adventure"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 mt-18">
        {dummyCarData.slice(0, 3).map((car) => (
          <div key={car._id}>
            <CarCart car={car} />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/cars");
          scrollTo(0, 0);
        }}
        className="flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer"
      >
        Explore All Cars and Bikes <img src={assets.arrow_icon} alt="arrow" />
      </button>
    </div>
  );
};

export default FeatureSection;

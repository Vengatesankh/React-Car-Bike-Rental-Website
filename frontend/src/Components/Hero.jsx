import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";

const Hero = () => {
  const [pickupLocatio, setPicupLocation] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 md:gap-14 text-center px-4 py-8 md:py-0">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium">
        Luxury Cars and Bike Rent
      </h1>

      {/* -----Registration form------ */}
      <form
        className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl md:rounded-full w-full max-w-md md:max-w-2xl
        bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]"
      >
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6 w-full">
          {/* Pickup Location */}
          <div className="flex flex-col items-start gap-1 w-full">
            <select
              required
              value={pickupLocatio}
              onChange={(event) => setPicupLocation(event.target.value)}
              className="w-full  border border-gray-200 rounded-lg text-sm md:text-base"
            >
              <option value="PickUp Location">PickUp Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className="px-1 text-xs md:text-sm text-gray-500">
              {pickupLocatio ? pickupLocatio : "Please Select Location"}
            </p>
          </div>

          {/* Pick-Up Date */}
          <div className="flex flex-col items-start gap-1 w-full">
            <label htmlFor="picup-date" className="text-sm font-medium">
              Pick-Up Date
            </label>
            <input
              type="date"
              id="picup-date"
              min={new Date().toISOString().split("T")[0]}
              className="w-full  border border-gray-200 rounded-lg text-sm"
              required
            />
          </div>

          {/* Return Date */}
          <div className="flex flex-col items-start gap-1 w-full">
            <label htmlFor="return-date" className="text-sm font-medium">
              Return Date
            </label>
            <input
              type="date"
              id="return-date"
              className="w-full   border border-gray-200 rounded-lg text-sm"
              required
            />
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-3 bg-primary hover:bg-primary-dull text-white rounded-lg md:rounded-full cursor-pointer mt-2 md:mt-0">
            <img
              src={assets.search_icon}
              alt="search"
              className="brightness-300 h-4 w-4 md:h-5 md:w-5"
            />
            <span className="text-sm md:text-base">Search</span>
          </button>
        </div>
      </form>

      {/* -----banner-image------ */}
      <div className="w-full mt-4 md:mt-0">
        <img
          src={assets.lastbannerCar}
          alt="main-img"
          className="w-full h-auto max-h-[40vh] md:max-h-[50vh] min-h-[250px] md:min-h-[350px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;

import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-12 md:py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-100/60 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-8 md:mb-12 space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
            Luxury
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Car & Bike Rentals
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience premium vehicles with exceptional service.
            <span className="block text-blue-600 font-medium mt-2">
              Your journey to luxury starts here.
            </span>
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-6 md:p-8 shadow-xl shadow-blue-100/30 mb-12">
          <form className="space-y-6 md:space-y-0">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-4 items-end">
              {/* Pickup Location */}
              <div className="text-left space-y-3">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Pickup Location
                  </span>
                </label>
                <div className="relative group">
                  <select
                    required
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-700 text-base
                             focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300
                             hover:border-gray-300 cursor-pointer shadow-sm group-hover:shadow-md"
                  >
                    <option value="" className="text-gray-500">
                      Select City
                    </option>
                    {cityList.map((city) => (
                      <option key={city} value={city} className="text-gray-700">
                        {city}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {pickupLocation && (
                  <p className="text-green-600 text-sm font-medium flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {pickupLocation} selected
                  </p>
                )}
              </div>

              {/* Pick-Up Date */}
              <div className="text-left space-y-3">
                <label
                  htmlFor="picup-date"
                  className="block text-sm font-semibold text-gray-700 uppercase tracking-wider"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Pick-Up Date
                  </span>
                </label>
                <div className="relative group">
                  <input
                    type="date"
                    id="picup-date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-700 text-base
                             focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300
                             hover:border-gray-300 shadow-sm group-hover:shadow-md"
                    required
                  />
                </div>
              </div>

              {/* Return Date */}
              <div className="text-left space-y-3">
                <label
                  htmlFor="return-date"
                  className="block text-sm font-semibold text-gray-700 uppercase tracking-wider"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Return Date
                  </span>
                </label>
                <div className="relative group">
                  <input
                    type="date"
                    id="return-date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    min={pickupDate}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-700 text-base
                             focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300
                             hover:border-gray-300 shadow-sm group-hover:shadow-md"
                    required
                  />
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="group relative overflow-hidden px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 
                         hover:from-blue-500 hover:to-blue-600 text-white rounded-xl cursor-pointer 
                         transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-200
                         active:scale-95 font-semibold text-base"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="flex items-center justify-center gap-2 relative z-10">
                  <img
                    src={assets.search_icon}
                    alt="search"
                    className="brightness-0 invert h-5 w-5 transition-transform group-hover:scale-110"
                  />
                  <span>Find Vehicles</span>
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Banner Image */}
        <div className="relative group max-w-6xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <img
            src={assets.lastbannerCar}
            alt="Luxury Car"
            className="relative w-full h-auto max-h-[50vh] md:max-h-[60vh] min-h-[300px] md:min-h-[400px] 
                     object-cover rounded-2xl shadow-2xl border-4 border-white group-hover:border-blue-100
                     transition-all duration-500 group-hover:scale-[1.02]"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20 rounded-2xl"></div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">
              500+
            </div>
            <div className="text-gray-600 text-sm uppercase tracking-wider font-medium">
              Premium Vehicles
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-cyan-600">
              24/7
            </div>
            <div className="text-gray-600 text-sm uppercase tracking-wider font-medium">
              Customer Support
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-600">
              50+
            </div>
            <div className="text-gray-600 text-sm uppercase tracking-wider font-medium">
              Cities Covered
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  return (
    <nav
      className={`bg-white shadow-sm border-b border-gray-100 px-4 sm:px-6 lg:px-8 ${
        location.pathname === "/" ? "bg-light" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={assets.logo}
              alt="logo"
              className="h-8 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* All navigation elements on the right */}
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                HOME
              </Link>
              <Link
                to="/cars"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                CARS
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                ABOUT
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-4 py-2 rounded-full max-w-56">
              <input
                type="text"
                className="py-1 w-full bg-transparent outline-none placeholder-gray-500"
                placeholder="Search Products"
              />
              <img
                src={assets.search_icon}
                alt="search-icon"
                className="h-4 w-4"
              />
            </div>

            {/* Dashboard button */}
            <button className="hidden md:block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer">
              Dashboard
            </button>

            {/* Login button */}
            <button className="px-6 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg font-medium cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = ({ setShowlogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`bg-white  shadow-sm border-b border-gray-100 px-4 sm:px-6 lg:px-8 ${
        location.pathname === "/" ? "bg-light" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" viewTransition>
            <img
              src={assets.logo}
              alt="logo"
              className="h-8 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* All navigation elements on the right */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                viewTransition
              >
                HOME
              </Link>
              <Link
                to="/cars"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                viewTransition
              >
                CARS
              </Link>
              <Link
                to="/mybooking"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                viewTransition
              >
                MY BOOKINGS
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
            <button
              onClick={() => navigate("/owner")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
            >
              Dashboard
            </button>

            {/* Login button */}
            <button
              onClick={() => setShowlogin(true)}
              className="px-6 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg font-medium cursor-pointer"
            >
              Login
            </button>
          </div>

          {/* ----Mobile-Screen View--- */}
          <button
            className="md:hidden cursor-pointer z-50"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <img
              src={open ? assets.close_icon : assets.menu_icon}
              alt="Menu"
              className="h-6 w-6"
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {open && (
          <div className="md:hidden">
            {/* Overlay with light background */}
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40 mt-16"
              onClick={() => setOpen(false)}
            >
              <div
                className="bg-white shadow-lg rounded-b-lg mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-4 pt-2 pb-6 space-y-4">
                  {/* Mobile Search Bar */}
                  <div className="flex items-center text-sm gap-2 border border-borderColor px-4 py-2 rounded-full">
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

                  {/* Mobile Navigation Links */}
                  <Link
                    to="/"
                    className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md font-medium transition-colors duration-200"
                    onClick={() => setOpen(false)}
                  >
                    HOME
                  </Link>
                  <Link
                    to="/cars"
                    className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md font-medium transition-colors duration-200"
                    onClick={() => setOpen(false)}
                  >
                    CARS
                  </Link>
                  <Link
                    to="/mybooking"
                    className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md font-medium transition-colors duration-200"
                    onClick={() => setOpen(false)}
                  >
                    MY BOOKINGS
                  </Link>

                  {/* Mobile Dashboard button */}
                  <button
                    onClick={() => {
                      navigate("/owner");
                      setOpen(false);
                    }}
                    className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md font-medium transition-colors duration-200"
                  >
                    Dashboard
                  </button>

                  {/* Mobile Login button */}
                  <button
                    onClick={() => setShowlogin(true)}
                    className="block w-full text-center py-3 px-4 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg font-medium"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

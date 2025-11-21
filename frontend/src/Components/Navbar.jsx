import React, { useState } from "react";
import { assets } from "../assets/assets";
import { data, Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

export const Navbar = () => {
  const { setShowlogin, user, logout, isOwner, axios, setIsOwner } =
    useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const changeRole = async () => {
    try {
      const { data } = await axios.post("/api/owner/changerole");
      if (data.success) {
        setIsOwner(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(data.message);
    }
  };
  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-lg bg-white/95 border-b transition-all duration-300 ${
        location.pathname === "/" ? "border-blue-100" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group" viewTransition>
            <img
              src={assets.logo}
              alt="Luxury Rentals"
              className="h-9 w-auto transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className={`relative font-semibold transition-all duration-300 px-3 py-2 rounded-lg ${
                  location.pathname === "/"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                viewTransition
              >
                HOME
                {location.pathname === "/" && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                )}
              </Link>
              <Link
                to="/cars"
                className={`relative font-semibold transition-all duration-300 px-3 py-2 rounded-lg ${
                  location.pathname === "/cars"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                viewTransition
              >
                CARS
                {location.pathname === "/cars" && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                )}
              </Link>
              <Link
                to="/mybooking"
                className={`relative font-semibold transition-all duration-300 px-3 py-2 rounded-lg ${
                  location.pathname === "/mybooking"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                viewTransition
              >
                MY BOOKINGS
                {location.pathname === "/mybooking" && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                )}
              </Link>
            </div>

            {/* Search Bar */}
            <div className="relative group">
              <div className="flex items-center text-sm gap-3 border border-gray-300 px-4 py-2.5 rounded-full max-w-64 transition-all duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 hover:border-gray-400">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="py-1 w-full bg-transparent outline-none placeholder-gray-500 text-gray-700"
                  placeholder="Search vehicles..."
                />
                <img
                  src={assets.search_icon}
                  alt="search"
                  className="h-4 w-4 opacity-60 group-focus-within:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Dashboard button */}
            <button
              onClick={() => (isOwner ? navigate("/owner") : changeRole())}
              className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              {isOwner ? "Dashboard" : "List cars"}
            </button>
            <button
              onClick={() => {
                user ? logout() : setShowlogin(true);
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-200 cursor-pointer"
            >
              {user ? "Logout" : "Login"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden cursor-pointer z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <img
              src={open ? assets.close_icon : assets.menu_icon}
              alt="Menu"
              className="h-6 w-6 transition-transform duration-300"
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="bg-white border-t border-gray-200 shadow-lg rounded-b-2xl mx-4 mb-4">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {/* Mobile Search Bar */}
              <div className="flex items-center text-sm gap-3 border border-gray-300 px-4 py-3 rounded-full mb-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="py-1 w-full bg-transparent outline-none placeholder-gray-500"
                  placeholder="Search vehicles..."
                />
                <img
                  src={assets.search_icon}
                  alt="search"
                  className="h-4 w-4 opacity-60"
                />
              </div>

              {/* Mobile Navigation Links */}
              <Link
                to="/"
                className={`flex items-center py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  location.pathname === "/"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={() => setOpen(false)}
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity duration-200"></span>
                HOME
              </Link>
              <Link
                to="/cars"
                className={`flex items-center py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  location.pathname === "/cars"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={() => setOpen(false)}
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity duration-200"></span>
                CARS
              </Link>
              <Link
                to="/mybooking"
                className={`flex items-center py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  location.pathname === "/mybooking"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={() => setOpen(false)}
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity duration-200"></span>
                MY BOOKINGS
              </Link>

              {/* Mobile Dashboard button */}
              <button
                onClick={() => {
                  navigate("/owner");
                  setOpen(false);
                }}
                className="flex items-center w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-semibold transition-all duration-200"
              >
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Dashboard
              </button>

              {/* Mobile Login button */}
              <button
                onClick={() => {
                  setShowlogin(true);
                  setOpen(false);
                }}
                className="w-full text-center py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] mt-2"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

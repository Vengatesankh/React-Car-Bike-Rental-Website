import React, { useEffect, useState } from "react";
import { assets, dummyMyBookingsData } from "../assets/assets";
import Title from "../Components/Title";
import { MdCurrencyRupee } from "react-icons/md";
const MyBookings = () => {
  const [booking, setBooking] = useState([]);

  const fetchmyBooking = async () => {
    setBooking(dummyMyBookingsData);
  };
  useEffect(() => {
    fetchmyBooking();
  }, []);
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl">
      <Title
        title={"My Bookings"}
        subTitle={"View and manage your car and bike bookings"}
        align="left"
      />

      <div>
        {booking.map((booking, index) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12"
          >
            {/* Car image and Info */}
            <div className="md:col-span-1">
              <div className="rounded-md overflow-hidden mb-3">
                <img
                  src={booking.car.image}
                  alt=""
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
              <p className="text-lg font-medium mt-2">
                {booking.car.brand} {booking.car.model}
              </p>
              <p className="text-gray-500">
                {booking.car.year} - {booking.car.category} -{" "}
                {booking.car.location}
              </p>
            </div>

            {/* ---Booking-info--- */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <p className="px-3 py-1.5 bg-light rounded">
                  Bookind # {index + 1}
                </p>
                <p
                  className={`px-3 py-1 text-xs rounded-full ${
                    booking.status === "confirmed"
                      ? "bg-green-400/15 text-green-600 "
                      : "bg-red-300 text-red-800"
                  }`}
                >
                  {booking.status}
                </p>
              </div>
              <div className="flex items-start gap-2 mt-3">
                <img
                  src={assets.calendar_icon_colored}
                  alt=""
                  className="w-4 h-4 mt-1"
                />
                <div className="text-gray-500">
                  <p>Rental Period</p>
                  <p>
                    {booking.pickupDate.split("T")[0]} To{" "}
                    {booking.returnDate.split("T")[0]}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-3">
                <img
                  src={assets.location_icon}
                  alt=""
                  className="w-4 h-4 mt-1"
                />
                <div className="text-gray-500">
                  <p>Pick-up Location</p>
                  <p>{booking.car.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-3">
                <img
                  src={assets.location_icon}
                  alt=""
                  className="w-4 h-4 mt-1"
                />
                <div className="text-gray-500">
                  <p>Return Location</p>
                  <p>{booking.returnDate.split("T")[0]}</p>
                </div>
              </div>
            </div>
            {/* price */}
            <div className="md:col-span-1 flex flex-col justify-between gap-6 p-4 ">
              <div className="text-sm text-gray-500 text-right space-y-2">
                <p className="font-medium">Total Price</p>

                <h1 className="flex items-center justify-end text-2xl font-bold text-gray-800">
                  <span className="mr-1">
                    <MdCurrencyRupee className="w-5 h-5" />
                  </span>
                  {booking.price}
                </h1>

                <p className="text-xs text-gray-400">
                  Booked On{" "}
                  <span className="font-medium text-gray-600">
                    {booking.createdAt.split("T")[0]}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;

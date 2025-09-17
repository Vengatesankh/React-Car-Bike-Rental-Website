import React, { useEffect, useState } from "react";
import { assets, dummyCarData, dummyMyBookingsData } from "../../assets/assets";
import Title from "../../Components/owner/Title";
import { MdCurrencyRupee } from "react-icons/md";
const ManageBoking = () => {
  const [booking, setBooking] = useState([]);
  const fetchOwnerBooking = async () => {
    setBooking(dummyMyBookingsData);
  };
  useEffect(() => {
    fetchOwnerBooking();
  }, []);
  return (
    <div className="px-4 pt-10 md:px-10 w-full">
      <Title
        title={"Manage Bookings"}
        subTitle="Tract all customer bookings,approve or cancel request, and manage booking statuses"
      />

      <div className="max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6">
        <table className="w-full border-collapse text-left text-sm text-gray-600">
          <thead className="text-gray-600">
            <tr>
              <th className="p-3 font-medium">Car</th>
              <th className="p-3 font-medium max-md:hidden">Date Range</th>
              <th className="p-3 font-medium">Total</th>
              <th className="p-3 font-medium max-md:hidden">Payment</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((data, index) => (
              <tr
                key={index}
                className="border-t border-borderColor text-gray-800"
              >
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={data.car.image}
                    alt="logo"
                    className="h-12 w-12 aspect-square rounded-md object-cover"
                  />
                  <p className="font-medium max-md:hidden">
                    {data.car.brand} - {data.car.model}
                  </p>
                </td>
                <td className="p-3 max-md:hidden">
                  {data.pickupDate.split("T")[0]} To{" "}
                  {data.returnDate.split("T")[0]}
                </td>
                <td className="p-3 ">
                  <p className="flex items-center">
                    <MdCurrencyRupee /> {data.price}
                  </p>
                </td>
                <td className="p-3 max-md:hidden">
                  <span className="bg-gray-200 px-3 py-1 rounded-full text-xs">
                    Offline
                  </span>
                </td>
                <td className="p-3">
                  {data.status === "pending" ? (
                    <select
                      value={data.status}
                      className="px-2 py-1.5 mt-1 text-gray-600 border border-borderColor rounded-md outline-none"
                    >
                      <option value="pending">Pending</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="confirmed">Confirmed</option>
                    </select>
                  ) : (
                    <span
                      className={`px-3 py-1 rounded-full font-medium ${
                        data.status === "confirmed"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-300 text-red-700"
                      }`}
                    >
                      {data.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBoking;

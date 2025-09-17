import React, { useEffect, useState } from "react";
import { assets, dummyCarData } from "../../assets/assets";
import Title from "../../Components/owner/Title";
import { MdCurrencyRupee } from "react-icons/md";
const ManageCar = () => {
  const [cars, setCars] = useState([]);
  const fetchOwnerCars = async () => {
    setCars(dummyCarData);
  };
  useEffect(() => {
    fetchOwnerCars();
  }, []);
  return (
    <div className="px-4 pt-10 md:px-10 w-full">
      <Title
        title={"Manage Cars"}
        subTitle="View all listed cars and bikes, Update their details, or remove them from the booking platform"
      />

      <div className="max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6">
        <table className="w-full border-collapse text-left text-sm text-gray-600">
          <thead className="text-gray-600">
            <tr>
              <th className="p-3 font-medium">Car</th>
              <th className="p-3 font-medium max-md:hidden">Category</th>
              <th className="p-3 font-medium">Price</th>
              <th className="p-3 font-medium max-md:hidden">Status</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((data, index) => (
              <tr key={index} className="border-t border-borderColor">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={data.image}
                    alt="logo"
                    className="h-12 w-12 aspect-square rounded-md object-cover"
                  />
                  <div className="max-md:hidden">
                    <p className="font-medium">
                      {data.brand} - {data.model}
                    </p>
                    <p>
                      {data.seating_capacity} - {data.transmission}
                    </p>
                  </div>
                </td>
                <td className="p-3 max-md:hidden">{data.category}</td>
                <td className="p-3">
                  <p className="flex items-center">
                    <MdCurrencyRupee />
                    {data.pricePerDay}/day
                  </p>
                </td>
                <td className="p-3 max-md:hidden">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      data.isAvaliable
                        ? "bg-green-200 text-green-700"
                        : "bg-red-300 text-red-700"
                    }`}
                  >
                    {data.isAvaliable ? "Available" : "Unavailable"}
                  </span>
                </td>
                <td className="flex items-center p-3">
                  <img
                    src={
                      data.isAvaliable ? assets.eye_close_icon : assets.eye_icon
                    }
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src={assets.delete_icon}
                    alt=""
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCar;

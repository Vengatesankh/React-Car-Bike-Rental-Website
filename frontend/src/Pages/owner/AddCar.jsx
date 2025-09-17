import React, { useState } from "react";
import Title from "../../Components/owner/Title";
import { assets } from "../../assets/assets";
const AddCar = () => {
  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: 0,
    location: "",
    description: "",
  });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title={"Add New Car and Bike"}
        subTitle={
          "Fill in details to list a new car and bike for booking, including pricing, availability, and car and bike specification"
        }
      />
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-6 text-gray-600 text-sm mt-6 max-w-xl"
      >
        {/* ----Car and bike Images-- */}
        <div className="flex items-center gap-2 w-full ">
          <label htmlFor="car-image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=""
              className="h-17 rounded cursor-pointer"
            />
            <input
              type="file"
              id="car-image"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files)}
            />
          </label>
          <p className="text-gray-600 text-sm">
            Upload a Picture of Your Car or Bike Image
          </p>
        </div>

        {/* ---Car and Bike brand and model--- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label>Brand</label>
            <input
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
              type="text"
              name="brand"
              value={car.brand}
              placeholder="e.g. BMW,Pulsar,Audi...."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Model</label>
            <input
              onChange={(e) => setCar({ ...car, model: e.target.value })}
              type="text"
              name="model"
              value={car.model}
              placeholder="e.g. X5,E-Class, n160...."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            />
          </div>
        </div>
        {/* --year-price-category--- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Year</label>
            <input
              onChange={(e) => setCar({ ...car, year: e.target.value })}
              type="number"
              name="year"
              value={car.year}
              placeholder="2025"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Daily Price</label>
            <input
              onChange={(e) => setCar({ ...car, pricePerDay: e.target.value })}
              type="number"
              name="pricePerDay"
              value={car.pricePerDay}
              placeholder="e.g. X5,E-Class, n160...."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Category</label>
            <input
              onChange={(e) => setCar({ ...car, category: e.target.value })}
              type="text"
              name="category"
              value={car.category}
              placeholder="e.g. X5,E-Class, n160...."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            />
          </div>
        </div>

        {/* --transmision,fuel type,seating-- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Transmission</label>
            <select
              name="transmission"
              onChange={(e) => setCar({ ...car, transmission: e.target.value })}
              value={car.transmission}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            >
              <option value="">Select a Transimission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Fuel Type</label>
            <select
              name="fuel_type"
              onChange={(e) => setCar({ ...car, fuel_type: e.target.value })}
              value={car.fuel_type}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            >
              <option value="">Select a Fuel Type</option>
              <option value="Gas">Gas</option>
              <option value="Diesel">Diesel</option>
              <option value="Petrol">Petrol</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Seating Capacity</label>
            <input
              onChange={(e) =>
                setCar({ ...car, seating_capacity: e.target.value })
              }
              type="number"
              name="seating_capacity"
              value={car.seating_capacity}
              placeholder="4"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            />
          </div>
        </div>
        {/* --Location-- */}
        <div className="flex flex-col w-full">
          <label>Location</label>
          <input
            onChange={(e) => setCar({ ...car, location: e.target.value })}
            type="number"
            name="location"
            value={car.location}
            placeholder="eg: chennai,madurai....."
            required
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col w-full">
          <label>Description</label>
          <textarea
            rows={3}
            onChange={(e) => setCar({ ...car, description: e.target.value })}
            type="number"
            name="description"
            value={car.description}
            placeholder="About Your Car or Bike....."
            required
            className="px-3
            py-2 mt-1 border border-borderColor rounded-md outline-none"
          ></textarea>
        </div>
        <button className="flex w-50 cursor-pointer items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white font-medium rounded-md outline-none">
          <img src={assets.tick_icon} alt="" />
          List Your Car Or Bike
        </button>
      </form>
    </div>
  );
};

export { AddCar };

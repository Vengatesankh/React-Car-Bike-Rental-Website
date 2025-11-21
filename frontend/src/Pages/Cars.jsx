import React, { useEffect, useState } from "react";
import Title from "../Components/Title";
import { assets, dummyCarData } from "../assets/assets";
import CarCart from "../Components/CarCart";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
const Cars = () => {
  //getiing search params from url
  const [searchParams] = useSearchParams();
  const pickupLocation = searchParams.get("pickupLocation");
  const pickupDate = searchParams.get("pickupDate");
  const returnDate = searchParams.get("returnDate");

  const { cars, axios } = useAppContext();
  const [input, setInput] = useState("");

  //filter the cars data
  //all fields is true it is return a cars
  const isSearchData = pickupLocation && pickupDate && returnDate;
  const [filterCars, setFilterCars] = useState([]);

  //filter cars in search bar
  const applyFilter = async () => {
    if (input === "") {
      setFilterCars(cars);
      return;
    }

    const q = input.toLowerCase();

    const filtered = cars.filter((car) => {
      return (
        car.brand?.toLowerCase().includes(q) ||
        car.model?.toLowerCase().includes(q) ||
        car.category?.toLowerCase().includes(q) ||
        car.transmission?.toLowerCase().includes(q) || // corrected spelling
        car.transmisson?.toLowerCase().includes(q) // fallback if backend uses misspelled key
      );
    });

    setFilterCars(filtered);
  };
  //search cars is filter with based on params
  const searchCarAvailability = async () => {
    try {
      const { data } = await axios.post("/api/booking/check-availability", {
        location: pickupLocation,
        pickupDate,
        returnDate,
      });
      if (data.success) {
        setFilterCars(data.availableCars);
        if (data.availableCars.length === 0) {
          toast("No cars Available");
        }
        return null;
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    isSearchData && searchCarAvailability();
  }, []);
  useEffect(() => {
    cars.length > 0 && !isSearchData && applyFilter();
  }, [input, cars]);
  return (
    <div>
      {/* ----search-Bar--- */}
      <div className="flex flex-col items-center py-20 bg-gray-100 max-md:px-4">
        <Title
          title={"Available Cars and Bikes"}
          subTitle={
            "Browse our selection of premium vechicles available for your next adventure"
          }
        />
        {/* --input box-- */}
        <div className="flex  items-center bg-white px-4 mt-6 max-w-140 w-full  h-12 rounded-full shadow">
          <img
            src={assets.search_icon}
            alt="icon"
            className="w-4.5 h-4.5 mr-2"
          />
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search by make, model, or features"
            className="w-full h-full outline-none text-gray-500"
          />
          <img
            src={assets.filter_icon}
            alt="filter"
            className="w-4.5 h-4.5 ml-2"
          />
        </div>
      </div>
      {/* ----All-available-Cars--- */}
      <div className="px-6  md:px-16 lg:px-24 xl:px-32 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
          {filterCars.map((car, index) => (
            <div key={index}>
              <CarCart car={car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;

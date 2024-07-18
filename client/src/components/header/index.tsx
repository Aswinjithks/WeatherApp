import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { serach } from "@store/slice/serachslice";
import { useDebouncedCallback } from "use-debounce";

const Header: React.FC = () => {
  const [city, setCity] = useState("");
  const dispatch = useAppDispatch();
  const data = useAppSelector((store) => store.search);

  const handleSubmit = useDebouncedCallback(async () => {
    if (city === "") {
      return toast.error(`Please enter a city name`);
    }
    if (city.length < 3) {
      return toast.error(`Please enter a valid city name`);
    }

    dispatch(serach(city));
  }, 500);

  return (
    <header className="bg-gray-400 p-4 flex items-center justify-between">
    <div className="flex items-center">
        <img
            src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-8.png"
            alt="Logo"
            className="h-10 w-10"
        />
        <h1 className="text-white text-2xl ml-2">Weather</h1>
    </div>
    <div className="flex items-center bg-white rounded-md shadow-md p-1.5">
        <FaSearch className="text-gray-400 ml-2" />
        <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none px-2 py-1 w-40 sm:w-60 text-sm"
            onChange={(e) => setCity(e.target.value)}
        />
        <button
            className="bg-teal-500 text-white px-4 py-1.5 rounded-md hover:bg-teal-600 transition duration-300 disabled:bg-teal-300 ml-2"
            onClick={handleSubmit}
            disabled={data.loading}
        >
            Search
        </button>
    </div>
</header>

  );
};

export default Header;

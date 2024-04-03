import React, { useState } from "react";

const defaultCity = "Guwahati"; // Default city
const indianCities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
];

function Searchy() {
  const [selectedCity, setSelectedCity] = useState(defaultCity);
  const [rightSearch, setRightSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDetectLocation, setShowDetectLocation] = useState(false);

  const handleRightInputChange = (event) => {
    const value = event.target.value;
    setRightSearch(value);
    setSelectedCity(value); // Syncing input value with selected city
  };

  return (
    <div className="relative">
      <div className="items-center flex justify-center">
        <div className="h-12 rounded-l-lg w-[15rem] border-2 border-zinc-600 flex justify-evenly items-center">
          <button onClick={() => setShowDropdown(!showDropdown)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search"
            value={selectedCity}
            readOnly
            className="w-full h-full bg-transparent outline-none px-4"
          />
        </div>
        <div className="h-12 rounded-r-lg w-[25rem] bg-white border-2 border-zinc-600 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={rightSearch}
            onChange={handleRightInputChange}
            className="w-full h-full bg-transparent outline-none px-4"
          />
          <button onClick={() => setShowDetectLocation(!showDetectLocation)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {showDropdown && (
        <div className="absolute left-[45rem]  bg-white border border-gray-300 shadow-md rounded-md ">
          <ul className="divide-y divide-gray-300">
            {indianCities.map((city) => (
              <li
                key={city}
                onClick={() => {
                  setSelectedCity(city);
                  setShowDropdown(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}
      {showDetectLocation && (
        <button>
          <div className="absolute top-[3.5rem] left-[60%] bg-white border border-gray-300 shadow-md rounded-md px-4 py-2">
            Detect your location
          </div>
        </button>
      )}
    </div>
  );
}

export default Searchy;

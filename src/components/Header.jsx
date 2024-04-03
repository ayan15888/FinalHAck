import React, { useState, useEffect, useRef } from "react";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        showDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target !== document.querySelector(".menu-icon")
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 640); // 640px is the default small breakpoint in Tailwind CSS
    }

    handleResize(); // Initial check on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 max-w-full  py-3 lg:px-48 px-5 flex mx-auto justify-between items-center bg-emerald-500">
      <div to={"/"}>
        <h1 className="text-white font-semibold text-3xl cursor-pointer">
          Krafters
        </h1>
      </div>
      <div className="flex items-center justify-between">
        {isSmallScreen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 menu-icon z-50"
            onClick={toggleDropdown}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
        {showDropdown && (
          <div ref={dropdownRef} className="dropdown relative md:hidden ">
            <div
              className="absolute inset-0 z-10 bg-gray-800 opacity-50"
              onClick={toggleDropdown}
            ></div>
            <div className="absolute right-0 mt-6 w-52 h-34 bg-white rounded-md shadow-lg z-20 ">
              <div
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                About Us
              </div>
              <div
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Health Checkup
              </div>
              <div
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Doctor
              </div>
            </div>
          </div>
        )}
        <div
          className="rounded-lg px-3 py-2 glow hidden md:block text-base mr-8 ease-in-out duration-500 font-semibold "
        >
          About us
        </div>
        <div
          className="rounded-lg px-3 py-2 glow hidden md:block text-base mr-8 ease-in-out duration-500 font-semibold "
        >
          Health Checkup
        </div>
        <div
          className="rounded-lg px-3 py-2 glow hidden md:block text-base mr-8 ease-in-out duration-500 font-semibold "
        >
          Doctor
        </div>
      </div>
    </div>
  );
}

export default Header;
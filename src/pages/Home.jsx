import React from "react";
import Header from "../components/Header";
import first from "../assets/first.jpg";
import { Route, Routes } from "react-router-dom";
import Contact from "../components/Contact";
import Login from "./Login";
import Construction from "./Construction";

function Home() {
  return (
    <>
      <Header />

      <div className="m-6 mt-28 h-60 rounded-2xl lg:m-20 lg:mx-48 lg:h-80 lg-mt-6">
        <img
          src={first}
          alt="First"
          className="w-full h-full rounded-xl object-cover opacity-90 "
        />
        <div className="w-full h-20  flex items-center justify-center ">
          <div className="w-[90%] lg:w-[55%] h-16 bg-white rounded-2xl mb-20 z-50 border-2 border-black flex justify-between items-center px-12 lg:px-20">
            <div>Book me</div>
            <div className="flex gap-6 items-center justify-between">
              <h1>Doctor</h1>
              <h1>Services</h1>
              <div className="w-16 h-8 bg-emerald-500 flex justify-center items-center rounded-full ">

             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact/>
      <Construction/>
      <Login/>
    </>
  );
}

export default Home;

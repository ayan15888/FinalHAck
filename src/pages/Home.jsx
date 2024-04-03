import React from "react";
import Header from "../components/Header";
import first from "../assets/first.jpg";
import { Route, Routes } from "react-router-dom";
import Contact from "../components/Contact";
import Login from "./Login";
// import Construction from "./Construction";
import Searchy from "../components/Searchy";
import Location from "./Location";
import About from "../pages/About";
import Container from "../components/Container";

function Home() {
  return (
    <>
      <Header />
      <div className="mt-36 h-[80vh] relative"> 
        <div className="m-6 mt-28 h-80 rounded-2xl lg:m-20 lg:mx-48 lg:h-80 lg-mt-6 ">
          <div className="absolute mt-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center"> {/* Centered text */}
            <h1 className="text-7xl font-bold font-mono text-zinc-900">Your Health Matters</h1>
            <h1 className="text-3xl font-extrabold font-mono mt-8 text-black">Your Health Matters</h1>
          </div>
          <img
            src={first}
            alt="First"
            className="w-full h-full rounded-xl object-cover opacity-90"
          />
          <div className="h-20 flex items-center justify-center ">
            <div className="w-[40%] lg:w-[55%] h-16 bg-white rounded-3xl mb-20 z-50 border-2 border-black flex justify-between items-center px-12 lg:px-20">
              <div className="flex flex-col items-center">
                <h3>Nearest Center</h3>
                <p className="text-xs">Where to Go?</p>
              </div>
              <div className="border-l-2 border-gray-600"></div>
              <div className="flex flex-col items-center">
                <h3>Nearest Center</h3>
                <p className="text-xs">Where to Go?</p>
              </div>
              <div className="border-l border-gray-300"></div>
              <div className="flex flex-col items-center">
                <h3>Nearest Center</h3>
                <p className="text-xs">Where to Go?</p>
              </div>
              <button className="bg-green-600 text-white p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Searchy />
      
      </div>
      <About/>
      <Container/>
      <Contact />
<Login />
      <Location />
    </>
  );
}

export default Home;

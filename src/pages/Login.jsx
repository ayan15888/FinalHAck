import React from "react";
import backgroundImage from "../assets/doctor.svg"; // 

function Login() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}> 
      <div className="h-screen w-full bg-emerald-400 bg-opacity-40 flex justify-center">
        <div className="bg-white rounded-xl h-[43rem] mt-20 w-[25rem] border-2 border-black">
          <h1 className="text-center text-3xl font-bold text-gray-800 p-10">
            Welcome to the Health
          </h1>
          <form className="px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2  p-2"
                htmlFor="email"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="name"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2  p-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline border-black"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-emerald-700 w-[25rem] hover:bg-emerald-900 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline hover:animate-pulse"
                type="button"
              >
                Sign Up
              </button>
            </div>
            <div className="mt-4 text-center flex items-center justify-center ">
              <button
                className=" flex items-center justify-center border-[1.8px] border-black hover:bg-emerald-400 text-black font-bold py-[10px] px-14 rounded focus:outline-none focus:shadow-outline hover:animate-pulse"
                type="button"
              >
                <img
                  className="h-6 w-6 mr-2"
                  src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
                  alt="Google Logo"
                />
                Login with Google
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
            <h2>Already have an account</h2>
            <button className="pl-2 font-bold text-emerald-700">Login</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;

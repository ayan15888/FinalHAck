import React from "react";

function Contact() {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-evenly">
      <div className="bg-white h-[30rem] w-[45rem] mx-16">
        <h1 className="text-7xl tracking-tighter leading-snug font-medium text-emerald-500">
          Get in touch to book your first appointment
        </h1>
        <h1 className="text-gray-500 font-mono text-4xl mt-12">
          We Care about your health
        </h1>
      </div>
      <div className=" w-[25rem] h-[40rem] flex flex-col justify-center items-center border-[3px] border-black rounded-3xl">
        <h2 className="text-emerald-400 text-3xl font-semibold mb-8">
          Contact Us
        </h2>
        <form className=" max-w-lg">
          <div className="mb-4">
           
            <input
              className="shadow appearance-none border rounded w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
           
            <input
              className="shadow appearance-none border rounded w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="problem"
              type="text"
              placeholder="Enter your problem"
            />
          </div>
          <div className="mb-4">
         
         <input
           className="shadow appearance-none border rounded  py-2 px-3 w-[20rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
           id="phone"
           type="tel"
           placeholder="Enter your phone number"
         />
       </div>
          <div className="mb-4">
           
            <textarea
              className="w-[20rem] max-h-48 min-h-32 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your message"
              rows="8"
            ></textarea>
          </div>
       
          <button
            className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block w-[20rem]"
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
      {/* <div className="h-12 w-full bg-black absolute bottom-0"></div> */}
    </div>
  );
}

export default Contact;

import React from "react";
import first from "../assets/first.jpg";
import Box from "./Box";
function Container() {
  return (
    <div className="w-full mt-20 flex justify-evenly items-center">
     <Box/>
     <Box/>
     <Box/>
    </div>
  );
}

export default Container;

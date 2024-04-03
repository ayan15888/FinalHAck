import React from 'react'
import first from "../assets/first.jpg";
function Box() {
  return (
    <div className="h-64 w-64">
        <img
          src={first}
          alt="First"
          className="w-full h-full rounded-xl object-cover opacity-90 "
        />
        <div className='bg-emerald-500 rounded absolute px-12 py-6'>
            <h1>Pediatrician</h1>
        </div>
      </div>
  )
}

export default Box
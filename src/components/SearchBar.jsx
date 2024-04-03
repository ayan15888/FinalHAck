import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className=" w-80 px-4 py-2 rounded-md mr-2 focus:outline-none focus:border-emerald-500 border-black border-[1.5px]"
        
      />
      
      <button
        onClick={() => setSearchTerm('')}
        className="px-4 py-1 bg-emerald-600 text-white rounded-md focus:outline-none"
      >
        Search
      </button>
      <button>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

      </button>
    </div>
  );
};

export default SearchBar;
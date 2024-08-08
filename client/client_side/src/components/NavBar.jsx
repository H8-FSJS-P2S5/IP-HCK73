import React, { useState } from "react";

export default function NavBar() {
  return (
    <div className="relative w-screen">
    <nav className="relative border-0  w-screen">
      <div className="w-screen container mx-auto flex justify-between items-center px-4 py-3 bg-black bg-opacity-50 fixed">
        <div className="flex w-1/3">
          <span className="text-xl font-semibold text-white ml-20">
            Tasteful
          </span>
        </div>
        <div className="w-1/3"></div>
        <div className="flex space-x-4 w-1/3 justify-center text-white">
          <a href="#home" className=" hover:text-blue-500">
            About
          </a>
          <a href="#about" className=" hover:text-blue-500">
            Ai
          </a>
          <a href="#recipes" className=" hover:text-blue-500">
            Recipes
          </a>
          <button href="#home" className="text-black flex font-bold justify-center items-center hover:bg-black hover:text-white  bg-white w-14 h-7  rounded-md">
            Login
          </button>
        </div>
      </div>
    </nav>
  </div>
  
    // <div>Tasteful</div>
  );
}

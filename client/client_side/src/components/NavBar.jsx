import React, { useState } from "react";

export default function NavBar() {
  return (
    <div className=" w-screen relative">
      <nav className="relative border-0 border-gray-600 ">
        <div className="container mx-auto flex justify-  items-center px-4 py-3 bg-white  bg-opacity-50  fixed">
          <div className="flex w-1/3 ">
            <span className="text-xl font-semibold text-gray-800 ml-20  ">
              Tasteful
            </span>
          </div>
          <div className="w-1/3"></div>
          <div className="flex space-x-4 w-1/3 justify-center  ">
            <a href="#home" className="text-gray-800 hover:text-blue-500">
              About
            </a>
            <a href="#about" className="text-gray-800 hover:text-blue-500">
              Ai
            </a>
            <a href="#recipes" className="text-gray-800 hover:text-blue-500">
              Recipes
            </a>

            <a href="#home" className="text-gray-800 hover:text-blue-500">
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
    // <div>Tasteful</div>
  );
}

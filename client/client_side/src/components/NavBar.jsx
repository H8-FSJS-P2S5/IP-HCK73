import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="relative border-0 w-screen z-10">
      <div className="w-full  flex justify-between items-center px-10 py-3 fixed  bg-opacity-25 backdrop-filter backdrop-blur-sm">
        <div className="flex w-1/3">
          <Link className="text-2xl font-cool hover:text-[#7fa947]" to={"/"}>
            Tasteful ®
          </Link>
        </div>
        
        <div className="flex space-x-4  justify-end  items-center">
          <Link
            to={"/cock-master"}
            className=" text-lg font-semibold hover:text-[#7fa947] "
          >
            CookMaster AI
          </Link>
          <Link to={"/our-recipes"} className=" hover:text-[#7fa947]">
            Our Recipes
          </Link>
          {/* <Link to={"/all-recipe"} className=" hover:text-[#7fa947]">
            Community
          </Link> */}

        </div>
      </div>
    </nav>
  );
}

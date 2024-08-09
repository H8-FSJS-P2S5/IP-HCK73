import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBarProfile() {

  const navigat = useNavigate()

  const HandleLogout =async() =>{
    try {
      localStorage.clear()
      navigat("/")
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <nav className="relative border-0 w-screen ">
      <div className="w-full mx-auto flex justify-between items-center px-4 py-3 bg-black bg-opacity-60 fixed">
        <div className="flex w-1/3">
          <Link className="text-xl text-white ml-24 font-cool" to={"/"}>
            Tasteful
          </Link>
        </div>
        <div className="w-1/3"></div>
        <div className="flex space-x-4 w-1/3 justify-center text-white items-center ">
          <Link
            to={"/cock-master"}
            className=" hover:text-black text-lg font-semibold "
          >
            CookMaster AI
          </Link>
          <Link to={"/our-recipes"} className=" hover:text-blue-500">
            Our Recipes
          </Link>
          <Link to={"/all-recipe"} className=" hover:text-blue-500">
            community
          </Link>

         <button className="hover:text-red-600" onClick={HandleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

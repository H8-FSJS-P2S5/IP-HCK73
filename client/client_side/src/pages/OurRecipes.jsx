import React, { useEffect, useState } from "react";
import RequestAPI from "../../helper/RequestAPI";
import data from "./recipe.json";
import { Link } from "react-router-dom";
export default function OurRecipes() {
  const [ourRecipe, setOurRecipe] = useState([]);
  const [ingredients, setIngredients] = useState("");
  const [image , setImage] =useState("")

  const FetchDataFromApi = async () => {
    try {
      let { data } = await RequestAPI({
        url: "/recipes/random",
        method: "GET",
        headers: {
          "x-api-key": "240398cbe8b54192903dadbe27ad54e5",
        },
      });

      setOurRecipe(data.recipes[0].title);
      setImage(data.recipes[0].image);
      let ingredients = data.recipes[0].extendedIngredients;

      ingredients = ingredients.map((el) => {
        return el.original;
      });

      setIngredients(ingredients.join(" "));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // FetchDataFromApi()
  }, []);

  console.log(ourRecipe);
  console.log(ingredients);

  return (
    <>
      <div className="bg-lime-200 h-52 flex flex-col items-center pt-20 gap-3 font-cool"> 
        <h1 className="text-2xl">search for recipe</h1>

  <div className="w-96 font-cool">
    <div className="flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
      <div className="grid place-items-center h-full w-12 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.."
      />
    </div>
  </div>


      </div>

      <div className=" h-screen pt-10  font-cool">

        

        <div className="flex flex-wrap ml-10 ">
          <div className=" flex flex-col bg-white shadow-xl  rounded-md w-96 h-96 ">
            <div className="h-1/3 ">
                <img src={`${image}`} alt="" />
            </div>
            <div className="h-1/3 flex flex-col-reverse">  
            <div className=" bg-black bg-opacity-40 flex justify-center">

              <h5 className=" m-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white text-center">
                {ourRecipe}
              </h5>
            </div>
             </div>

            <div  className="flex justify-center flex-wrap mb-5" >
            <p className=" font-sans text-base antialiased font-light leading-relaxed text-inherit mt-5">
                {ingredients.slice(0,50)} ..
              </p>

            </div>
            <div className="p-6 flex gap-2 pt-0 mt-1">
              <Link className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-black text-white shadow-lg shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:bg-slate-400 hover:text-black ">
                Read
              </Link>
             
            </div>
          </div>

        <div className=" w-4/6  h-96 flex flex-col p-10 justify-center gap-5">
            <h1 className="text-6xl">
                Rondom Recipe Maybe You Would like To Try.
                </h1>
                <p>this will generate new recipe evreytime you refresh. </p>
    
        </div>
        </div>

      </div>
    </>
  );
}

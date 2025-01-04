import React, { useEffect, useRef, useState } from "react";
import RequestRecipe from "../../helper/RequestRecipe";
import AddRecipe from "./AddRecipe";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function CockMaster() {
  const [prompt, setPrompet] = useState("");
  const [answer, setAnswer] = useState("");
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: [],
    instructions: ''
});

const parseRecipe = (result) => {
  const titleMatch = result.match(/Title: (.+?)Ingredients:/s);
  const ingredientsMatch = result.match(/Ingredients: (.+?)Instructions:/s);
  const instructionsMatch = result.match(/Instructions: (.+)/s);

  if (titleMatch) {
      setRecipe(prev => ({ ...prev, title: titleMatch[1].trim() }));
  }
  if (ingredientsMatch) {
      const ingredients = ingredientsMatch[1].split('*').map(item => item.trim()).filter(item => item);
      setRecipe(prev => ({ ...prev, ingredients }));
  }
  if (instructionsMatch) {
      setRecipe(prev => ({ ...prev, instructions: instructionsMatch[1].trim() }));
  }
};

useEffect(() => {
  if(answer !== "009900"){

    parseRecipe(answer);
  }
}, [answer]);

  const CockAi = async (e) => {
    e.preventDefault();
    try {
      const { data } = await RequestRecipe({
        url: "/ai",
        method: "POST",

        data: {
          promp: prompt,
        },
      });
    
      
      setAnswer(data);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };


  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.4 }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, []);


  return (
    <div className="bg-lime-200 px-32 py-20 min-h-screen flex flex-col justify-center">
      <div
      ref={blockRef}
      className={`h-full px-20 flex flex-col ${answer ? 'items-end  translate-x-16' : 'items-center'}
      ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      }
      
      transition-all duration-500 space-y-4`}>
        <h1 className={`${answer && "opacity-0 -translate-x-0"}transition-all  duration-500 text-4xl font-cool`}>Ask Me</h1>

        <div className="w-96 font-cool ">
          <form onSubmit={CockAi}>
            <div className="flex items-center w-full h-10 rounded-lg focus-within:shadow-lg overflow-hidden">
              <div className="grid place-items-center w-12 absolute text-gray-300">
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
                className="h-full w-full pl-12 bg-white outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
                value={prompt}
                onChange={(e) => setPrompet(e.target.value)}
              />
            </div>
          </form>


        </div>
        <p className={`${answer && "opacity-0 translate-x-0"} transition-all  duration-500 w-full font-thin text-center`}>&quot;Our AI recipe generator makes cooking easy and fun! Just tell us what ingredients you have or what you&apos;re in the mood for, and it will whip up a recipe just for you. Whether you&apos;re trying something new or using what’s in your fridge, we’ll help you create a delicious meal in no time!&quot;</p>

      </div>
        <div
          className={`w-full shadow-2xl p-10 rounded-xl flex flex-col space-y-5 bg-white flex-1 transition-all  duration-500  
            ${ answer ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
            overflow-hidden
            `}
        >
          <div className="absolute h-screen w-screen -z-10 -left-5">

          <div className="border-[35px] h-96 w-96 absolute rounded-full right-1 border-[#FF8E04]  blur-sm opacity-30"></div>
          <div className="border-4 h-96 w-96 absolute rounded-full right-32 bottom-0 border-[#7fa947] blur-sm bg-opacity-40"></div>
            
          </div>
          {recipe.title !== "" && (
          
            
           <h1 className="text-3xl text-[#7fa947] font-cool">{recipe.title}</h1>
          )
          
          }

           <div className="flex flex-row ">
            {recipe.title === "" ? (
            <div>
              <h1 className="text-3xl font-cool">I Don't Understad :(</h1>
            </div>

            ) : (
<>

           <div className="flex-1 flex flex-col space-y-4 border-l-2 border-black px-5">
            <h2 className="text-2xl font-semibold ">Ingredients</h2>
            <ul className="flex flex-col space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

           </div>

            <div className=" flex-1 space-y-4 border-l-2 border-black px-5">

            <h2 className="text-2xl font-semibold ">Instructions</h2>
            <p>{recipe.instructions}</p>

            </div>
</>
            )}

{/* <div>{answer}</div> */}



           </div>

          {/* {answer !== "" ? (
            <Link
              className="bg-black w-44 text-white h-10 rounded-full"
              to={"/add-edit"}
              state={{ answer: answer }}
            >
              add to my recipe
            </Link>
          ) : (
            ""
          )} */}
        </div>
    </div>
  );
}

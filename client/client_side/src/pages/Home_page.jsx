import React, { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import imgSrc from "../assets/3428189_60286.jpg";
import { Link } from "react-router-dom";
import secondImg from "../assets/top-view-food-ingredients-with-veggies-notebook.jpg";
import leftImg from "../assets/IMG_9895.jpg";
import spoon from "../assets/pngwing.com.png";
import leaf from "../assets/food/klipartz.com.png"
import NavBar from "../components/NavBar";
import Swal from "sweetalert2";
import plate_food from "../assets/food/pngegg.png";
import arrow from "../assets/icons/4829869_arrow_next_right_icon.svg";
import tuxure from "../assets/texture/gray-color-cotton-texture-surface-background.jpg";
import Slides from "../components/Slides";

export default function Home_page() {
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
    <>
      <NavBar />

      <div className=" h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-pink-100 overflow-y-auto">
        {/* left_side */}

        <div className="h-screen py-20  px-32"> 
         
        <div
          ref={blockRef}
          className={`
        transition-all  duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }
        
        flex  w-full h-full rounded-3xl overflow-hidden  shadow-2xl bg-white`}
        >
           <div className="h-screen  absolute z-40 -my-20  -mx-32 p-20">

<img src={leaf} alt=""  className="h-16 z-40 ml-96"/>
<img src={leaf} alt=""  className="h-16 z-40 -rotate-45 ml-2"/>
<img src={leaf} alt=""  className="h-20 z-40 rotate-45 ml-[1020px]"/>

</div>
          <div className="w-1/2 h-full flex flex-col justify-center p-10 space-y-2 ">
            <div className="flex-1">
              <h1 className="text-[#7fa947]">Welcome to a world of culinary creativity!</h1>
              <h1 className="text-5xl font-cool">Discover New Recipes</h1>
              <h1 className="font-thin">
                Discover mouthwatering recipes crafted just for you, and take
                your cooking adventures to the next level with our AI-powered
                recipe generator
              </h1>
              <div className="border-b-2 mt-10 border-black"></div>
            </div>

            <div className="flex flex-col w-full  gap-10 justify-end  text-white">
              <Link to={"/add-edit"}>
                <button className="w-32 h-10 text-white rounded-full bg-gradient-to-b from-[#9bc06b] to-[#7fa947] font-semibold hover:from-[#000000] hover:to-[#1b1b1b] hover:w-36 hover:h-12 hover:text-xl
                transition-all  duration-500 relative shadow-lg border-[1px] border-black
                ">
                  Try It Now
                </button>
              </Link>
              <Link to={"/all-recipe"} className="flex items-center gap-5">
                <button className="h-10  text-black hover:text-[#7fa947]">
                  see our choosen Recipes{" "}
                </button>
                <img src={arrow} alt="" className="h-8 mt-1" />
              </Link>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <div className="p-10 w-full flex flex-row-reverse text-slate-500">
              <h1 className="">Cook Master AI</h1>
            </div>
            <img src={plate_food} className="ml-10" />
          </div>

          {/* button  */}
        </div>

        </div>


        <Slides/>

        <div className="h-screen  flex flex-col justify-between">
          <div className="py-20 px-32">
            <p className="text-2xl font-abc">"Welcome to a world of culinary creativity! Discover mouthwatering recipes crafted just for you, and take your cooking adventures to the next level with our AI-powered recipe generator. Whether you're looking for quick weeknight dinners, indulgent desserts, or something totally unique, our platform has it all. Plus, you can share your favorite creations and get inspired by others. Let your taste buds explore endless possibilities—your next signature dish is just a click away!"</p>
          </div>
          <div className="bg-black h-1/3 px-32 py-10 flex gap-5 items-end">
          <div className="bg-white h-10 w-10"></div>
          <div className="bg-white h-10 w-10"></div>
          <div className="bg-white h-10 w-10"></div>
          <div className="bg-white h-10 w-10"></div>
          
          </div>
        </div>
      </div>
    </>
  );
}

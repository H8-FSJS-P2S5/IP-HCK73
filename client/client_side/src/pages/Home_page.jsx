import React, { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import imgSrc from "../assets/3428189_60286.jpg";
import { Link } from "react-router-dom";
import secondImg from "../assets/top-view-food-ingredients-with-veggies-notebook.jpg";
import leftImg from "../assets/IMG_9895.jpg";
import spoon from "../assets/pngwing.com.png";
import leaf from "../assets/food/klipartz.com.png";
import NavBar from "../components/NavBar";
import Swal from "sweetalert2";
import plate_food from "../assets/food/pngegg.png";
import arrow from "../assets/icons/4829869_arrow_next_right_icon.svg";
import Slides from "../components/Slides";
import AboutUs from "../components/AboutUs";
import ig from "../assets/icons/1161953_instagram_icon.svg"
import wa from "../assets/icons/843786_whatsapp_icon.svg"
import email from "../assets/icons/1181190_email_gmail_google_mail_icon.svg"


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
        
        flex  w-full h-full rounded-3xl overflow-hidden  shadow-2xl bg-white py-10`}
          >
            <div className="h-screen  absolute  -my-20  -mx-32 p-20">
              <img
                src={leaf}
                alt=""
                className="h-10 md:h-16  z-40 ml-96 hover:rotate-45 2xl:h-24 2xl:ml-[700px] xl:ml-[600px] transition-all  duration-500"
              />
              <img
                src={leaf}
                alt=""
                className="h-16 z-40  -rotate-45 ml-2 hover:rotate-45 transition-all  duration-500"
              />
              <img
                src={leaf}
                alt=""
                className="h-16 z-40   -rotate-45 2xl:ml-[750px]  md:ml-[500px] 2xl:h-24 2xl:mt-80 mt-40 xl:mt-60 hover:rotate-45 transition-all  duration-500"
              />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center p-10 space-y-2 ">
              <div className="flex-1 2xl:space-y-5 xl:space-y-5 ">
                <h2 className="text-[#7fa947] 2xl:text-3xl xl:text-xl lg:text-xl">
                  Welcome to a world of culinary creativity!
                </h2>
                <h1 className="text-5xl  2xl:text-8xl xl:text-5xl  lg:text-5xl font-cool">
                  Discover New Recipes
                </h1>
                <p className="font-thin 2xl:text-xl xl:text-xl lg:text-lg ">
                  Discover mouthwatering recipes crafted just for you, and take
                  your cooking adventures to the next level with our AI-powered
                  recipe generator
                </p>
                <div className="border-b-2 mt-10 border-black"></div>
              </div>

              <div className="flex flex-col w-full  gap-10 justify-end  text-white">
                <Link to={"/cock-master"} className="w-fit rounded-full ">
                  <button
                    className="w-32 h-10   text-white rounded-full bg-gradient-to-b from-[#9bc06b] to-[#7fa947] font-semibold hover:from-[#000000] hover:to-[#1b1b1b] 
                    2xl:w-52 2xl:h-16 2xl:text-xl 
                    2xl:hover:w-60 hover:2xl:text-2xl
                    xl:hover:w-60 hover:xl:text-2xl
                    xl:w-52 xl:h-16 xl:text-xl 


                    hover:w-40  hover:text-xl hover:text-[#FFD700]
                transition-all  duration-500 relative shadow-lg 
                "
                  >
                    Try It Now
                  </button>
                </Link>
                <Link
                  to={"/our-recipes"}
                  className="flex items-center gap-5 z-40  "
                >
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
              <img
                src={plate_food}
                className="ml-10 h-[500px] hover:h-[450px] 2xl:h-[800px] 2xl:hover:h-[600px] transition-all hover:rotate-45 bg-[#FFD700] shadow-xl rounded-full duration-500 absolute"
              />
            </div>

            {/* button  */}
          </div>
        </div>

        <Slides />

        <AboutUs />

        <div className="h-40"></div>

          <div className="bg-white h-10 w-10"></div>
        <div className="bg-black h-1/3  py-10 flex justify-between items-end p-20">

          <div className="flex gap-3 items-center">
          <div className=" h-10 w-10">
            <img src={ig} alt="" />
          </div>
          <div className=" h-10 w-10">
            <img src={wa} alt="" />
          </div>
          <div className=" h-10 w-10">
            <img src={email} alt="" />
          </div>

          </div>

          <div className="flex  text-white text-5xl font-cool">
            Tasteful ®
          </div>
        </div>
      </div>
    </>
  );
}

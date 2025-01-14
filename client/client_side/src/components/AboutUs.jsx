import React, { useState, useRef, useEffect } from "react";
import tuxure from "../assets/texture/gray-color-cotton-texture-surface-background.jpg";

export default function AboutUs() {
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
    <div
    ref={blockRef}
      className={`h-screen flex justify-between items-center 
        transition-all  duration-500 ${
         isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
       } 
       bg-[#6a9347] mt-10     
       rounded-tr-[15px] rounded-br-[15px] xl:mr-10 mr-5 2xl:mr-40 shadow-2xl overflow-hidden
      `}
    >

        
        <div className="h-full w-full absolute -z-10 overflow-hidden bg-gradient-to-r from-[#f7e7d7] opacity-40 to-[#937047]">
          <img src={tuxure} alt="" className="mix-blend-multiply" />
          
        </div>
      
          <div className="py-20 px-32 space-y-5 ">
            <h1 className="text-3xl font-cool border-b-2 py-2 border-black">Welcome to a world of culinary creativity!</h1>
            <p className="text-2xl ">
              &quot; Discover mouthwatering
              recipes crafted just for you, and take your cooking adventures to
              the next level with our AI-powered recipe generator. Whether
              you&apos;re looking for quick weeknight dinners, indulgent desserts, or
              something totally unique, our platform has it all. Plus, you can
              share your favorite creations and get inspired by others. Let your
              taste buds explore endless possibilities—your next signature dish
              is just a click away!&quot;
            </p>
            <p className="font-cool text-xl text-end">TasteFul Team.</p>
          </div>
        </div>
  )
}

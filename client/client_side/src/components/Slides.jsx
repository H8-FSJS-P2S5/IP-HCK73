import React, { useState, useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import texure from "../assets/texture/gray-color-cotton-texture-surface-background.jpg"

export default function         Slides() {
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
       rounded-tl-[150px] rounded-bl-[150px] overflow-hidden  shadow-2xl bg-white xl:ml-10 ml-5 2xl:ml-40
      `}
    >
       
       <div className="absolute h-screen w-screen -z-10 ">

<div className="border-[35px] h-96 w-96 absolute rounded-full right-1 border-[#FF8E04] "></div>
<div className="border-[9px] h-96 w-96 absolute rounded-full right-32 bottom-0 border-[#7fa947]  bg-opacity-40"></div>
<div className="border-4 h-[800px] w-[800px] absolute top-6 mt-40 rounded-full  border-[#FFD700]  shadow-[#FFD700] shadow-inner bg-opacity-40"></div>
  
</div>
      

      <div className="px-32 flex-1 h-full flex flex-col space-y-3 justify-center ">
        <h1 className="text-7xl  font-cool text-black">
          <span className="text-[#6a9347]">Our</span> Chosen Recipes<span className="text-[#FFD700]">.</span>{" "}
        </h1>
        <div className="border-2 w-full border-[#6a9347] -z-10"> </div>
      </div>

      
      <div className="overflow-hidden h-full items-center flex flex-2 ">
       
      {/* <div className="h-80 w-full absolute z-40 overflow-hidden bg-gradient-to-l from-[#000000] opacity-50 ">
          
          
        </div> */}
       
       
        <Marquee
          style={{ overflow: "hidden" }}
          speed={100}
          autoFill={true}
          className="h-full"
        >

          <div className="flex ">

            <div className="h-72 w-60 rounded-lg bg-pink-200 overflow-hidden mx-2 shadow-lg p-2 flex flex-col-reverse" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_cyd3Ks4nYYYnSFOWRr0ijxgubapWMjwFg&s')", backgroundSize: "cover" }}>
              <div className=" flex flex-col ">
                <div className="bg-black bg-opacity-20 backdrop-blur-sm p-1 rounded-sm">
                  <h1 className="text-2xl text-[#f4e1d2] font-cool">Sebagiti</h1>
                  <p className="font-thin text-sm text-white">luremmcx dwsc wdasojdas oqwdn oin oisdlkmc</p>
                </div>
              </div>
            </div>

            <div className="h-72 w-60 rounded-lg bg-pink-200 overflow-hidden mx-2 shadow-lg p-2 flex flex-col-reverse" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzGTIIkhNNhM12zKSGZcUaFMTEwWwMtuZDQ&s')", backgroundSize: "cover" }}>
              <div className="  flex flex-col ">
                <div className="bg-black bg-opacity-20 backdrop-blur-sm p-1 rounded-sm">
                  <h1 className="text-2xl text-[#f4e1d2] font-cool">Sebagiti</h1>
                  <p className="font-thin text-sm text-white">luremmcx dwsc wdasojdas oqwdn oin oisdlkmc</p>
                </div>
              </div>
            </div>

            <div className="h-72 w-60 rounded-lg bg-pink-200 overflow-hidden mx-2 shadow-lg p-2 flex flex-col-reverse" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV8QN69Uvuy76oXnHBHZkuvl2Gv_IfUTedAQ&s')", backgroundSize: "cover" }}>
              <div className="  flex flex-col ">
                <div className="bg-black bg-opacity-20 backdrop-blur-sm p-1 rounded-sm">
                  <h1 className="text-2xl text-[#f4e1d2] font-cool">Sebagiti</h1>
                  <p className="font-thin text-sm text-white">luremmcx dwsc wdasojdas oqwdn oin oisdlkmc</p>
                </div>
              </div>
            </div>

            <div className="h-72 w-60 rounded-lg bg-pink-200 overflow-hidden mx-2 shadow-lg p-2 flex flex-col-reverse" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZCnE5ZdEk4SnYb_Ci3Z8amqBsKk5qo8ssg&s')", backgroundSize: "cover" }}>
              <div className="  flex flex-col ">
                <div className="bg-black bg-opacity-20 backdrop-blur-sm p-1 rounded-sm">
                  <h1 className="text-2xl text-[#f4e1d2] font-cool">Sebagiti</h1>
                  <p className="font-thin text-sm text-white">luremmcx dwsc wdasojdas oqwdn oin oisdlkmc</p>
                </div>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

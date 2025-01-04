import React, { useState, useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";

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
      className={`h-screen   bg-blue-500 flex 
       transition-all  duration-500 ${
         isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
       }
      `}
    >
      <div className="px-32 ">
        <h1 className="text-5xl  font-cool">
          <span className="text-[#7fa947]">Our</span> Chosen Recipes{" "}
        </h1>
      </div>

      
      <div className="mt-5 flex flex-col space-y-2">
        <Marquee
          style={{ overflow: "hidden" }}
          speed={100}
          autoFill={true}
          className=""
        >
          <div className="flex ">
            <div className="h-72 w-60 rounded-lg bg-pink-200 overflow-hidden mx-2 shadow-lg">
              <div className="h-72 w-60 bg-gradient-to-t from-black  rounded-lg  absolute bg-opacity-50"></div>
              <div className=" absolute h-72 w-60  flex flex-col-reverse p-5 text-white ">
                <div>
                <h1 className="text-2xl font-cool">Sebagiti</h1>
                <p className="font-thin">luremmcx dwsc wdasojdas oqwdn oin oisdlkmc</p>

                </div>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_cyd3Ks4nYYYnSFOWRr0ijxgubapWMjwFg&s"
                alt=""
                className=" h-full " 
              />
            </div>

            <div className="h-72 w-60 rounded-lg bg-pink-200 overflow-hidden mx-2">
              <div className="h-72 w-60 bg-gradient-to-t from-black  rounded-lg  absolute bg-opacity-50"></div>
              <div className=" absolute h-72 w-60  flex flex-col-reverse p-5 text-white ">
                <div>
                <h1 className="text-2xl font-cool">Sebagiti</h1>
                <p className="font-thin">luremmcx dwsc wdasojdas oqwdn oin oisdlkmc</p>

                </div>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzGTIIkhNNhM12zKSGZcUaFMTEwWwMtuZDQ&s"
                alt=""
                className=" bg-cover h-full"
              />
            </div>

            <div className="h-72 w-60 rounded-lg bg-pink-200 overflow-hidden mx-2">
              <div className="h-72 w-60 bg-gradient-to-t from-black  rounded-lg  absolute bg-opacity-50"></div>
              <div className=" absolute h-72 w-60  flex flex-col-reverse p-5 text-white ">
                <div>
                <h1 className="text-2xl font-cool">Sebagiti</h1>
                <p className="font-thin">luremmcx dwsc wdasojdas oqwdn oin oisdlkmc</p>

                </div>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV8QN69Uvuy76oXnHBHZkuvl2Gv_IfUTedAQ&s"
                alt=""
                className=" bg-cover h-full"
              />
            </div>

            <div className="h-72 w-60 rounded-lg bg-pink-200 overflow-hidden mx-2">
              <div className="h-72 w-60 bg-gradient-to-t from-black  rounded-lg  absolute bg-opacity-50"></div>
              <div className=" absolute h-72 w-60  flex flex-col-reverse p-5 text-white ">
                <div>
                <h1 className="text-2xl font-cool">Sebagiti</h1>
                <p className="font-thin">luremmcx dwsc wdasojdas oqwdn oin oisdlkmc</p>

                </div>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZCnE5ZdEk4SnYb_Ci3Z8amqBsKk5qo8ssg&s"
                alt=""
                className=" bg-cover h-full"
              />
            </div>
          </div>
        </Marquee>
        <Marquee
          style={{ overflow: "hidden" }}
          speed={100}
          autoFill={true}
          className=""
        >
          <div className="flex ">
            <div className="h-72 w-60 rounded-lg bg-pink-200 overflow-hidden mx-2 shadow-lg">
              <div className="h-72 w-60 bg-gradient-to-t from-black  rounded-lg  absolute bg-opacity-50"></div>
              <div className=" absolute h-72 w-60  flex flex-col-reverse p-5 text-white ">
                <div>
                <h1 className="text-2xl font-cool">Sebagiti</h1>
                <p className="font-thin">luremmcx dwsc wdasojdas oqwdn oin oisdlkmc</p>

                </div>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_cyd3Ks4nYYYnSFOWRr0ijxgubapWMjwFg&s"
                alt=""
                className=" h-full " 
              />
            </div>

            <div className="h-72 w-60 rounded-lg bg-pink-200 overflow-hidden mx-2">
              <div className="h-72 w-60 bg-gradient-to-t from-black  rounded-lg  absolute bg-opacity-50"></div>
              <div className=" absolute h-72 w-60  flex flex-col-reverse p-5 text-white ">
                <div>
                <h1 className="text-2xl font-cool">Sebagiti</h1>
                <p className="font-thin">luremmcx dwsc wdasojdas oqwdn oin oisdlkmc</p>

                </div>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzGTIIkhNNhM12zKSGZcUaFMTEwWwMtuZDQ&s"
                alt=""
                className=" bg-cover h-full"
              />
            </div>

            <div className="h-72 w-60 rounded-lg bg-pink-200 overflow-hidden mx-2">
              <div className="h-72 w-60 bg-gradient-to-t from-black  rounded-lg  absolute bg-opacity-50"></div>
              <div className=" absolute h-72 w-60  flex flex-col-reverse p-5 text-white ">
                <div>
                <h1 className="text-2xl font-cool">Sebagiti</h1>
                <p className="font-thin">luremmcx dwsc wdasojdas oqwdn oin oisdlkmc</p>

                </div>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV8QN69Uvuy76oXnHBHZkuvl2Gv_IfUTedAQ&s"
                alt=""
                className=" bg-cover h-full"
              />
            </div>

            <div className="h-72 w-60 rounded-lg bg-pink-200 overflow-hidden mx-2">
              <div className="h-72 w-60 bg-gradient-to-t from-black  rounded-lg  absolute bg-opacity-50"></div>
              <div className=" absolute h-72 w-60  flex flex-col-reverse p-5 text-white ">
                <div>
                <h1 className="text-2xl font-cool">Sebagiti</h1>
                <p className="font-thin">luremmcx dwsc wdasojdas oqwdn oin oisdlkmc</p>

                </div>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZCnE5ZdEk4SnYb_Ci3Z8amqBsKk5qo8ssg&s"
                alt=""
                className=" bg-cover h-full"
              />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

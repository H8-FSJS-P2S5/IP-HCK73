import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import instance from "../helpers/instance";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const HandleRegister = async (e) => {
    e.preventDefault();

    try {
      await instance({
        url: "/register",
        method: "POST",
        data: {
          username,
          email,
          password,
        },
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    }
  };

  return (
    <div className="font-[sans-serif] bg-[#121212] md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 bg-black h-full">
          <img
            alt="login-image"
            className="h-full object-cover overflow-hidden hidden lg:block mx-auto"
            src="https://www.teahub.io/photos/full/185-1857230_witcher-3-wallpaper-art.jpg"
          />
        </div>
        <div className="flex items-center p-6 h-full w-full">
          <form onSubmit={HandleRegister} className="max-w-lg w-full mx-auto">
            <div className="mb-12 text-center">
              <h3 className="text-white md:text-3xl text-2xl font-extrabold max-md:text-center">
                Create an account
              </h3>
            </div>
            {/* Username */}
            <div>
              <label className="text-[#c1c1c1] text-xs block mb-2">
                Username
              </label>
              <div className="relative flex items-center">
                <input
                  className="w-full bg-transparent text-sm text-white border-b border-gray-600 focus:border-white px-2 py-3 outline-none"
                  name="username"
                  placeholder="Enter username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <svg
                  className="w-[18px] h-[18px] absolute right-2"
                  fill="#bbb"
                  stroke="#bbb"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="7" data-original="#000000" r="6" />
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  />
                </svg>
              </div>
            </div>
            {/* Email */}
            <div className="mt-6">
              <label className="text-[#c1c1c1] text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  className="w-full bg-transparent text-sm text-white border-b border-gray-600 focus:border-white px-2 py-3 outline-none"
                  name="email"
                  placeholder="Enter email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <svg
                  className="w-[18px] h-[18px] absolute right-2"
                  fill="#bbb"
                  stroke="#bbb"
                  viewBox="0 0 682.667 682.667"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath clipPathUnits="userSpaceOnUse" id="a">
                      <path d="M0 512h512V0H0Z" data-original="#000000" />
                    </clipPath>
                  </defs>
                  <g
                    clipPath="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="40"
                    />
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    />
                  </g>
                </svg>
              </div>
            </div>
            {/* Password */}
            <div className="mt-6">
              <label className="text-[#c1c1c1] text-xs block mb-2">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  className="w-full bg-transparent text-sm text-white border-b border-gray-600 focus:border-white px-2 py-3 outline-none"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <svg
                  className="w-[20px] h-[20px] text-gray-400 absolute right-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {/* Create Account */}
            <div className="mt-12">
              <button
                className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none"
                type="submit"
              >
                Create an account
              </button>
              <p className="text-sm mt-3 text-[#c1c1c1] text-center">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-white font-semibold underline hover:no-underline ml-1"
                  href="javascript:void(0);"
                >
                  Login here
                </Link>
              </p>
            </div>
            {/* <div className="my-4 py-3 flex items-center text-sm text-gray-400 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 ">
              Or
            </div> */}

            {/* Sign up w/ Google */}
            {/* <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-200 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg
                className="w-4 h-auto"
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none"
              >
                <path
                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                  fill="#4285F4"
                />
                <path
                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                  fill="#34A853"
                />
                <path
                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                  fill="#FBBC05"
                />
                <path
                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                  fill="#EB4335"
                />
              </svg>
              Continue with Google
            </button> */}
            {/* <GoogleLogin /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

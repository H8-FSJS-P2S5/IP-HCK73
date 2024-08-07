import { useEffect, useState } from "react";
import instance from "../helpers/instance";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    ReadUser();
  }, []);

  const ReadUser = async (e) => {
    try {
      let { data } = await instance({
        url: `/user`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      
      setUsername(data.username);
      setEmail(data.email);
      setPassword(data.password);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleEditProfile = async (e) => {
    e.preventDefault();
    try {
      let { data } = await instance({
        url: `/editProfile`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          username,
          email,
          password,
        },
      });
      navigate("/");
      Swal.fire({
        title: "Success",
        text: "Success update user profile!",
        confirmButtonText: "OK",
        confirmButtonColor: "#2563eb",
        icon: "success",
        background: "#151515",
        color: "white",
      });
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
          confirmButtonText: "OK",
          confirmButtonColor: "#2563eb",
          background: "#151515",
          color: "white",
        });
      }
    }
  };

  return (
    <div className="font-[sans-serif] relative">
      <div className="h-[240px] font-[sans-serif]">
        <img
          alt="Banner Image"
          className="w-full h-full object-cover"
          src="https://readymadeui.com/cardImg.webp"
        />
      </div>
      <div className="relative -mt-40 m-4">
        <form
          onSubmit={HandleEditProfile}
          className="bg-[#151515] max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-8 rounded-2xl"
        >
          <div className="mb-12">
            <h3 className="text-white text-3xl font-bold text-center">
              Profile
            </h3>
          </div>
          <div>
            <label className="text-[#c1c1c1] text-xs block mb-2">
              Username
            </label>
            <div className="relative flex items-center">
              <input
                className="w-full bg-transparent text-sm text-[#c1c1c1] border-b border-gray-500 focus:border-white px-2 py-3 outline-none"
                name="username"
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
          <div className="mt-8">
            <label className="text-[#c1c1c1] text-xs block mb-2">Email</label>
            <div className="relative flex items-center">
              <input
                className="w-full bg-transparent text-sm text-[#c1c1c1] border-b border-gray-500 focus:border-white px-2 py-3 outline-none"
                name="email"
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
          <div className="mt-8">
            <label className="text-[#c1c1c1] text-xs block mb-2">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                className="w-full bg-transparent text-sm text-[#c1c1c1] border-b border-gray-500 focus:border-white px-2 py-3 outline-none"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled
              />
              <svg
                class="w-[24px] h-[24px] text-gray-400 absolute right-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                  clip-rule="evenodd"
                />
              </svg>
              {/* <svg
                className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                fill="#bbb"
                stroke="#bbb"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"
                />
              </svg> */}
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              className="w-full sm:w-1/4 shadow-xl py-2.5 px-5 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
              type="submit"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

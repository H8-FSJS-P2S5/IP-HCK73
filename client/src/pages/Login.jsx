import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import instance from "../helpers/instance";
import GoogleLogin from "../components/GoogleLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let { data } = await instance({
        url: `/login`,
        method: "post",
        data: {
          email,
          password,
        },
      });
      localStorage.setItem("access_token", data.access_token);

      navigate("/");
    } catch (error) {
      if (error.response.status) {
        setErrorMessage(error.response.data.message);
        setIsError(true);
      }
    }
  };

  return (
    <div>
      {/* Error Notification */}
      {isError && (
        <div className="font-[sans-serif] space-y-6">
          <div
            className="bg-red-100 text-red-800  p-4 rounded-lg relative"
            role="alert"
          >
            <span className="font-bold block text-sm sm:inline max-sm:mt-2 max-sm:ml-0 ml-4 mr-8">
              {errorMessage}
            </span>
          </div>
        </div>
      )}

      {/* Login Form */}
      <div className="mt-24">
        <div className="mx-auto w-1/3 bg-[#151515] border border-black rounded-xl shadow-lg">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-white">Sign in</h1>
              <p className="mt-2 text-sm text-[#c1c1c1]">
                Don't have an account yet?<span> </span>
                <Link
                  to={"/register"}
                  className="text-white decoration-1 underline hover:no-underline focus:outline-none focus:underline font-medium"
                >
                  Sign up here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              {/* <!-- Form --> */}
              <form onSubmit={handleLogin}>
                <div className="grid gap-y-4">
                  {/* Email */}
                  <div>
                    <label
                      for="email"
                      className="block text-sm mb-2 text-[#c1c1c1]"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        value={email}
                        id="email"
                        name="email"
                        type="email"
                        className="px-4 py-3 text-white rounded-md bg-transparent border border-[#c1c1c1] w-full outline-[#c1c1c1]"
                        placeholder="username@example.com"
                      />
                    </div>
                  </div>

                  {/* <!-- Password --> */}
                  <div>
                    <div className="flex justify-between items-center">
                      <label
                        for="password"
                        className="block text-sm mb-2 text-[#c1c1c1]"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        value={password}
                        id="password"
                        name="password"
                        type="password"
                        className="px-4 py-3 text-white rounded-md bg-transparent border border-[#c1c1c1] w-full outline-[#c1c1c1]"
                        placeholder="Your password"
                      />
                    </div>
                  </div>

                  {/* Remember me */}
                  {/* <div className="flex items-center">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                      />
                    </div>
                    <div className="ms-3">
                      <label for="remember-me" className="text-sm">
                        Remember me
                      </label>
                    </div>
                  </div> */}

                  {/*  */}
                  <button
                    onClick={handleLogin}
                    type="submit"
                    className="w-full mx-auto mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <div className="my-4 py-3 flex items-center text-sm text-gray-400 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 ">
                Or sign in with
              </div>

              {/* Sign in w/ Google */}
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
                Google
              </button> */}
              <div className="flex justify-center">
                <GoogleLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

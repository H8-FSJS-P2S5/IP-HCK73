import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import instance from "../helpers/instance";
import GoogleLogin from "../components/GoogleLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div>
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

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import ApiRequest from "../helpers/ApiRequest"
import axios from "axios"

const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const registerUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3000/register', {email, password})
            navigate('/login')
            Swal.fire({
                title: 'Register Success',
                text: 'Welcome to Sky Gate Indonesia. Sign in to continue',
                icon: 'success'
            })
        } catch (error) {
             Swal.fire({
                title: 'Oops..',
                text:  error.response.data.message,
                icon: 'error'
              })
        }
    }


    return (
        <section className="bg-white font-outfit">
            <div className="flex justify-center min-h-screen">
                <div
                    className="hidden bg-cover lg:block lg:w-2/5"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1485727511593-8c9f45ea2a06?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                    }}></div>
                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <h1 className="text-2xl font-extrabold tracking-wider text-gray-800 capitalize">
                            Sign up now for your free account!
                        </h1>
                        <p className="mt-4 text-gray-500 font-medium">
                            Start refining your travel choices by verifying your personal information and customizing your preferences with Sky Gate Indonesia's expert insights.
                        </p>
                        <form onSubmit={registerUser}>
                            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600">
                                        Email address
                                    </label>
                                    <input value={email} onChange={(e) => {setEmail(e.target.value)}}
                                        type="email"
                                        placeholder="johnsnow@example.com"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600">
                                        Password
                                    </label>
                                    <input value={password} onChange={(e) => {setPassword(e.target.value)}}
                                        type="password"
                                        placeholder="Enter your password"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                            </div>
                            <div className="mt-5">
                                <button type="submit" className="flex items-center justify-center w-full px-6 py-3 text-sm text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    <span className="tracking-wide font-semibold">Sign Up </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 rtl:-scale-x-100"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <p className="mt-6 text-sm text-center text-gray-400">
                                    Already have an account?{" "}
                                    <Link to={'/login'}
                                        className="text-blue-500 focus:outline-none focus:underline hover:underline"
                                    >
                                        Sign in
                                    </Link>
                                    .
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default RegisterPage
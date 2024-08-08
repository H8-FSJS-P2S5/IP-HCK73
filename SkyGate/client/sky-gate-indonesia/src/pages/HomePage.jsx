import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <section className="bg-white font-outfit">
            {/* top */}
            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-bold tracking-wide text-gray-800 lg:text-4xl">
                            Free Nationwide Airport & Travel Database
                        </h1>
                        <div className="mt-8 space-y-5">
                            <p className="flex items-center -mx-2 text-gray-700">
                                <svg
                                    className="w-6 h-6 mx-2 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                                <span className="mx-2">
                                    Explore detailed airport data with interactive tools
                                </span>
                            </p>
                            <p className="flex items-center -mx-2 text-gray-700">
                                <svg
                                    className="w-6 h-6 mx-2 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                                <span className="mx-2">
                                    The dataset is from aviation enthusiasts nationwide
                                </span>
                            </p>
                            <p className="flex items-center -mx-2 text-gray-700">
                                <svg
                                    className="w-6 h-6 mx-2 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                                <span className="mx-2">
                                    Discover local insights through our AI assistance
                                </span>
                            </p>
                            <div>
                                <Link to={'/airports'}
                                    className="px-5 py-2.5 relative rounded group text-white font-medium inline-block">
                                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500" />
                                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500" />
                                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500" />
                                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500" />
                                    <span className="relative">
                                        Discover Now!
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img
                        alt="hero-photo"
                        className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                        src="https://images.unsplash.com/photo-1524592714635-d77511a4834d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>
            </div>


            {/* bottom */}
            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img
                        alt="hero-photo"
                        className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                        src="https://images.unsplash.com/photo-1610985725707-bb0766bf123b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>

                <div className="w-full lg:w-1/2 lg:ml-24">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-bold tracking-normal text-gray-800 lg:text-4xl">
                            Nationwide Airport & Travel Data Right At Your Fingertips!
                        </h1>
                        <div className="mt-8 space-y-5">
                            <p className="flex items-center -mx-2 text-gray-700">
                                <svg
                                    className="w-6 h-6 mx-2 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                                <span className="mx-2">
                                    Accurate Airport Data
                                </span>
                            </p>
                            <p className="flex items-center -mx-2 text-gray-700">
                                <svg
                                    className="w-6 h-6 mx-2 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                                <span className="mx-2">
                                    Trusted Source
                                </span>
                            </p>
                            <p className="flex items-center -mx-2 text-gray-700">
                                <svg
                                    className="w-6 h-6 mx-2 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                                <span className="mx-2">
                                    Advance AI assistance
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HomePage
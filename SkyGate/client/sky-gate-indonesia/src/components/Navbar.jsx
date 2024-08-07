import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            {/* ========== HEADER ========== */}
            <header className="sticky drop-shadow-md font-outfit top-4 inset-x-0 before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] after:absolute after:inset-0 after:-z-[1] after:max-w-[66rem] after:mx-2 after:lg:mx-auto after:rounded-[26px] after:bg-blue-500 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
                <nav className="relative max-w-[66rem] w-full md:flex md:items-center md:justify-between md:gap-3 ps-5 pe-2 mx-2 lg:mx-auto py-2">
                    {/* Logo w/ Collapse Button */}
                    <div className="flex items-center justify-between">
                        <div className="flex justify-center mx-auto">
                            <svg className="h-8 bg-white fill-blue-500 rounded-lg p-1"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 117.84 122.88"
                                style={{ enableBackground: "new 0 0 117.84 122.88" }}
                                xmlSpace="preserve"
                            >
                                <g>
                                    <path d="M106.41,76.26c0.16,0,0.31,0.02,0.46,0.04c0.98-1.7,1.87-3.49,2.67-5.36c0.02-0.04,0.03-0.07,0.05-0.11 c1.21-2.85,2.12-5.81,2.73-8.88c0.48-2.38,0.77-4.82,0.88-7.32l-14.39,0c-0.26,7.31-2.44,14.51-6.51,21.62H106.41L106.41,76.26 L106.41,76.26z M11.06,111.51c0.01-2.52,1.44-4.98,3.76-7.73L1.36,95.27c-0.85-0.37-0.83-0.89-0.34-1.5l2.85-2.43 c0.52-0.32,1.07-0.46,1.66-0.29l16.62,2.81l10.81-11.96L0.65,60.02C-0.17,59.54-0.24,59,0.6,58.37l4.66-3.72L47.4,66.49 l12.45-13.31c4.18-3.61,8.23-5.23,11.35-4.46c1.72,0.42,2.32,0.94,2.85,2.55c1.03,3.16-0.57,7.4-4.35,11.77L56.4,75.48l11.84,42.14 l-3.72,4.66c-0.63,0.84-1.17,0.77-1.65-0.04L40.99,89.92l-11.96,10.81l2.81,16.62c0.16,0.59,0.03,1.14-0.29,1.66l-2.43,2.85 c-0.61,0.49-1.13,0.51-1.5-0.34l-8.51-13.46c-2.77,2.33-5.23,3.76-7.75,3.76C11.11,111.81,11.06,111.73,11.06,111.51L11.06,111.51 L11.06,111.51z M103.9,80.85H89.4c-3.97,5.75-9.18,11.44-15.62,17.06l-1.38-4.9c4.46-4.04,8.24-8.09,11.35-12.16H68.98l-0.76-2.7 l2.02-1.89h16.72c4.54-7.15,6.98-14.36,7.27-21.62h-8.77c0.23-1.55,0.26-3.09,0.08-4.59h8.59c-0.6-7.1-3.23-14.3-7.94-21.62H67.78 l0,0v9.06c-1.43,0.24-2.86,0.65-4.3,1.21c-0.1,0.04-0.19,0.08-0.29,0.12V28.44H44.78c-4.71,7.31-7.34,14.52-7.94,21.62h12.2 l-4.29,4.59h-0.06l-16.33-4.59h3.9c0.53-7.16,2.91-14.36,7.16-21.62H24.08c-0.97,1.69-1.85,3.46-2.65,5.31 c-0.02,0.04-0.03,0.07-0.05,0.11c-1.21,2.85-2.12,5.81-2.73,8.88c-0.29,1.45-0.51,2.91-0.67,4.4l-4.48-1.26 c0.16-1.36,0.38-2.71,0.64-4.04c0.67-3.35,1.68-6.61,3.02-9.78c0.02-0.04,0.03-0.08,0.05-0.13c1.36-3.16,2.97-6.13,4.84-8.92 c1.87-2.78,3.99-5.36,6.36-7.72c2.36-2.37,4.94-4.49,7.72-6.36c2.79-1.87,5.77-3.49,8.92-4.84l0,0l0.01,0 c3.2-1.37,6.5-2.39,9.89-3.07l0,0C58.38,0.34,61.88,0,65.49,0c3.6,0,7.11,0.34,10.51,1.02c3.35,0.67,6.61,1.68,9.78,3.02 c0.04,0.02,0.09,0.03,0.13,0.05c3.16,1.36,6.13,2.97,8.92,4.84c2.79,1.87,5.36,3.99,7.72,6.36c2.38,2.36,4.49,4.94,6.36,7.72 c1.87,2.79,3.49,5.77,4.84,8.92l0,0l0,0.01c1.37,3.2,2.39,6.5,3.07,9.89c0.68,3.4,1.02,6.91,1.02,10.51c0,3.6-0.34,7.11-1.02,10.51 c-0.67,3.35-1.68,6.61-3.02,9.77c-0.01,0.04-0.03,0.08-0.05,0.13c-1.36,3.16-2.97,6.13-4.84,8.92c-1.87,2.78-3.98,5.36-6.36,7.72 c-2.37,2.37-4.94,4.49-7.72,6.36c-2.79,1.87-5.77,3.49-8.92,4.84l0,0l-0.01,0c-3.2,1.37-6.5,2.39-9.89,3.07 c-0.19,0.04-0.38,0.07-0.56,0.11l-1.25-4.43c0.3-0.05,0.61-0.11,0.91-0.17c3.11-0.62,6.11-1.55,8.99-2.78l0,0 c2.93-1.26,5.66-2.74,8.19-4.43c2.53-1.7,4.87-3.63,7.03-5.79l0.01-0.01l0,0C100.98,84.51,102.51,82.74,103.9,80.85L103.9,80.85 L103.9,80.85z M27.07,23.85h15.28c4.35-6.27,10.11-12.58,17.29-18.93c-1.27,0.15-2.53,0.35-3.78,0.6c-3.11,0.62-6.1,1.55-8.99,2.78 l0,0c-2.93,1.26-5.66,2.74-8.19,4.43c-2.53,1.7-4.87,3.63-7.03,5.79l-0.01,0.01l0,0C29.99,20.19,28.46,21.97,27.07,23.85 L27.07,23.85L27.07,23.85z M71.32,4.92c7.18,6.35,12.94,12.65,17.29,18.93h15.29c-1.39-1.88-2.92-3.66-4.58-5.32l-0.01-0.01l0,0 c-2.15-2.16-4.5-4.09-7.03-5.79c-2.53-1.69-5.26-3.17-8.19-4.43c-0.04-0.02-0.07-0.03-0.11-0.05c-2.85-1.21-5.81-2.12-8.88-2.73 C73.86,5.27,72.6,5.07,71.32,4.92L71.32,4.92L71.32,4.92z M106.88,28.44H91.55c4.26,7.25,6.63,14.46,7.16,21.62h14.48 c-0.11-2.5-0.41-4.94-0.88-7.32c-0.62-3.11-1.55-6.1-2.78-8.99l0,0C108.73,31.9,107.86,30.13,106.88,28.44L106.88,28.44 L106.88,28.44z M67.78,7.9v15.95h15.19C78.98,18.59,73.92,13.27,67.78,7.9L67.78,7.9L67.78,7.9z M63.19,23.85V7.9 C57.05,13.27,51.99,18.59,48,23.85H63.19L63.19,23.85L63.19,23.85z" />
                                </g>
                            </svg>
                            <p className="w-64 flex items-center text-white justify-start ml-3 font-semibold tracking-wide">
                                Sky Gate Indonesia
                            </p>
                        </div>
                        {/* Collapse Button */}
                        <div className="md:hidden">
                            <button
                                type="button"
                                className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                id="hs-header-classic-collapse"
                                aria-expanded="false"
                                aria-controls="hs-header-classic"
                                aria-label="Toggle navigation"
                                data-hs-collapse="#hs-header-classic"
                            >
                                <svg
                                    className="hs-collapse-open:hidden size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1={3} x2={21} y1={6} y2={6} />
                                    <line x1={3} x2={21} y1={12} y2={12} />
                                    <line x1={3} x2={21} y1={18} y2={18} />
                                </svg>
                                <svg
                                    className="hs-collapse-open:block shrink-0 hidden size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                                <span className="sr-only">Toggle navigation</span>
                            </button>
                        </div>
                        {/* End Collapse Button */}
                    </div>
                    {/* End Logo w/ Collapse Button */}
                    {/* Collapse */}
                    <div
                        id="hs-header-classic"
                        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
                        aria-labelledby="hs-header-classic-collapse"
                    >
                        <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                            <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
                                <Link to={'/'}
                                    className="p-2 flex items-center text-sm text-white hover:text-cyan-200 focus:outline-none focus:text-cyan-200 hover:underline"
                                    href="#"
                                    aria-current="page"
                                >
                                    <svg
                                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    </svg>
                                    Home
                                </Link>
                                <Link to={'/airports'}
                                    className="p-2 flex items-center text-sm text-white hover:text-cyan-200 focus:outline-none focus:text-cyan-200 hover:underline"
                                    href="#"
                                >
                                    <svg
                                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                    Airports
                                </Link>
                                <a
                                    className="p-2 flex items-center text-sm text-white hover:text-cyan-200 focus:outline-none focus:text-cyan-200 hover:underline"
                                    href="#"
                                >
                                    <svg
                                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 12h.01" />
                                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                        <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                                        <rect width={20} height={14} x={2} y={6} rx={2} />
                                    </svg>
                                    Work
                                </a>
                                <a
                                    className="p-2 flex items-center text-sm text-white hover:text-cyan-200 focus:outline-none focus:text-cyan-200 hover:underline"
                                    href="#"
                                >
                                    <svg
                                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                                        <path d="M18 14h-8" />
                                        <path d="M15 18h-5" />
                                        <path d="M10 6h8v4h-8V6Z" />
                                    </svg>
                                    Blog
                                </a>
                                {/* Button Group */}
                                <div className="relative flex flex-wrap items-center gap-x-1.5 md:ps-2.5  md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-gray-300 before:-translate-y-1/2">
                                    <a
                                        className="p-2 w-full flex items-center text-sm text-white hover:text-cyan-200 focus:outline-none focus:text-cyan-200 hover:underline"
                                        href="#"
                                    >
                                        <svg
                                            className="shrink-0 size-4 me-3 md:me-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                            <circle cx={12} cy={7} r={4} />
                                        </svg>
                                        Sign Out
                                    </a>
                                </div>
                                {/* End Button Group */}
                            </div>
                        </div>
                    </div>
                    {/* End Collapse */}
                </nav>
            </header>
            {/* ========== END HEADER ========== */}
        </>

    )
}

export default Navbar
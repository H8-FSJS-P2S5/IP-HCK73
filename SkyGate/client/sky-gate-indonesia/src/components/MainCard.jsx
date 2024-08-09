import { Link } from "react-router-dom"

const MainCard = ({ item }) => {
    return (
        <div className="mb-5 flex border border-gray-100 justify-between lg:w-[55vw] px-8 py-4 bg-white rounded-lg shadow-lg shadow-gray-100 font-outfit">
            <div className="mt-2">
                <p
                    className="text-xl font-bold text-gray-700 hover:text-gray-600"
                    role="link"
                >
                    {item.name}
                </p>
                <div className="flex items-center justify-start my-2">
                    <p
                        className="px-3 py-1 text-sm mr-3 font-bold text-white transition-colors duration-300 transform bg-blue-500 rounded">
                        IATA: {item.iataCode ? item.iataCode : 'N/A'}
                    </p>
                    <p
                        className="px-3 py-1 text-sm font-bold text-white transition-colors duration-300 transform bg-blue-500 rounded">
                        ICAO: {item.icaoCode ? item.icaoCode : 'N/A'}
                    </p>
                </div>
            </div>
            <div className="flex items-center">
                <Link to={`/airports/${item.airportCode}`} type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 fill-blue-500 drop-shadow-sm">
                        <path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
                        <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z" clipRule="evenodd" />
                        <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                        <title>
                            See Detail
                        </title>
                    </svg>

                </Link>
            </div>
        </div>

    )
}

export default MainCard
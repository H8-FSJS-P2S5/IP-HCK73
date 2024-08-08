import { Link } from "react-router-dom"

const DetailCard = ({ airportDetail }) => {
    return (
            <div className="flex flex-col bg-white font-outfit border h-[25vw] w-[50vw] shadow-sm rounded-xl">
                <div className="p-8 flex flex-col">
                    <div className="w-[45vw]">
                        <h3 className="text-xl font-extrabold tracking-wide text-gray-900">
                            {airportDetail.name}
                        </h3>
                    </div>
                    <div className="flex">
                        <div className="mt-5 w-[23vw]">
                            <div>
                                <p className="mt-2 text-gray-800 font-semibold text-justify">
                                    IATA Code:
                                </p>
                                <p className="ml-4 text-gray-500 font-medium text-justify">
                                    {airportDetail.iataCode ? airportDetail.iataCode : 'N/A'}
                                </p>
                            </div>
                            <div>
                                <p className="mt-2 text-gray-800 font-semibold text-justify">
                                    ICAO Code:
                                </p>
                                <p className="ml-4 text-gray-500 font-medium text-justify">
                                    {airportDetail.icaoCode ? airportDetail.icaoCode : 'N/A'}
                                </p>
                            </div>
                            <div>
                                <p className="mt-2 text-gray-800 font-semibold text-justify">
                                    Elevation:
                                </p>
                                <p className="ml-4 text-gray-500 font-medium text-justify">
                                    {airportDetail.elevation} m MSL
                                </p>
                            </div>
                            <div>
                                <p className="mt-2 text-gray-800 font-semibold text-justify">
                                    Type:
                                </p>
                                <p className="ml-4 text-gray-500 font-medium text-justify">
                                    {airportDetail.private === false ? 'Civil Airport' : 'Private Airport'}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mt-5 ml-2 h-[10vw] w-[25vw]">
                                <div>
                                    <p className="mt-2 text-gray-800 font-semibold text-justify">
                                        Runway 1 Designator:
                                    </p>
                                    <p className="ml-4 text-gray-500 font-medium text-justify">
                                        {airportDetail.runway1 ? airportDetail.runway1 : 'N/A'}
                                    </p>
                                </div>
                                <div>
                                    <p className="mt-2 text-gray-800 font-semibold text-justify">
                                        Runway 2 Designator:
                                    </p>
                                    <p className="ml-4 text-gray-500 font-medium text-justify">
                                        {airportDetail.runway2 ? airportDetail.runway2 : 'N/A'}
                                    </p>
                                </div>
                            </div>
                            <div className="ml-2 pt-10 h-[5vw] w-[25vw]">
                                <Link to={`/airports/${airportDetail.airportCode}/reviews`}
                                    className="flex justify-center relative px-10 py-3 font-medium text-white transition duration-300 bg-blue-400 rounded-2xl hover:bg-blue-500 ease">
                                    <span className="absolute bottom-0 left-0 h-full -ml-2">
                                        <svg
                                            className="w-auto h-full opacity-100 object-stretch"
                                            viewBox="0 0 487 487"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                                                fill="#FFF"
                                                fillOpacity=".1"
                                                fillRule="nonzero"
                                            />
                                        </svg>
                                    </span>
                                    <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                                        <svg
                                            className="object-cover w-full h-full"
                                            viewBox="0 0 487 487"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                                                fill="#FFF"
                                                fillOpacity=".1"
                                                fillRule="nonzero"
                                            />
                                        </svg>
                                    </span>
                                    <span className="relative">
                                        Add Review
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

    )
}

export default DetailCard
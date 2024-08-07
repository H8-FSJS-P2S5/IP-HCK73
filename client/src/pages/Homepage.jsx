import { Link, useParams } from "react-router-dom";
import instance from "../helpers/instance";
import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

const Homepage = () => {
  const [games, setGames] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  const [searchGame, setSearchGame] = useState("");

  const [sort, setSort] = useState("");

  useEffect(() => {
    ReadAllGames();
  }, [currentPage, searchGame, sort]);

  const ReadAllGames = async (e) => {
    try {
      let { data } = await instance({
        url: `/games`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        params: {
          page: {
            number: currentPage,
          },
          search: searchGame,
          sort: sort,
        },
      });

      setGames(data.data);
      setTotalPage(data.totalPage);
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="snap-y snap-mandatory overflow-scroll">
      {/* Headers */}
      <div className="relative h-screen text-white overflow-hidden snap-start">
        <div className="absolute inset-0">
          <img
            alt="Background Image"
            className="object-cover object-center w-full h-full"
            src="https://images5.alphacoders.com/131/1315219.jpeg"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Get Recommendations
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Enter your favorite genre?
          </p>
          <a
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            href="#games"
          >
            Browse Games
          </a>
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Welcome to Our Awesome Website
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover amazing features and services that await you.
          </p>
          <a
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            href="#games"
          >
            Browse Games
          </a>
        </div>
      </div>
      {/* Games Card */}
      <div
        id="games"
        className="font-sans p-4 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-md"
      >
        <h2 className="text-4xl font-extrabold text-white text-center mb-8">
          Games
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {games.map((game) => (
            <GameCard game={game} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPage > 0 && (
        <div className="mb-6">
          <ul className="font-[sans-serif] flex mx-auto border-2 divide-x-2 border-white rounded-lg w-max mt-4">
            {currentPage !== 1 && (
              <li
                onClick={prevPage}
                className="px-5 py-2.5 flex items-center justify-center shrink-0 cursor-pointer text-sm font-semibold text-white min-w-[110px] hover:bg-white hover:text-black transition-all"
              >
                <svg
                  className="w-3 fill-current mr-3"
                  viewBox="0 0 55.753 55.753"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                    data-original="#000000"
                  />
                </svg>
                Previous
              </li>
            )}
            {currentPage !== totalPage && (
              <li
                onClick={nextPage}
                className="px-5 py-2.5 flex items-center justify-center shrink-0 cursor-pointer text-sm font-semibold text-white min-w-[110px] hover:bg-white hover:text-black"
              >
                Next
                <svg
                  className="w-3 fill-current ml-3 rotate-180"
                  viewBox="0 0 55.753 55.753"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                    data-original="#000000"
                  />
                </svg>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Homepage;

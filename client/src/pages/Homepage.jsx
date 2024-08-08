import { Link, useParams } from "react-router-dom";
import instance from "../helpers/instance";
import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

const Homepage = () => {
  const [games, setGames] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  const [searchGame, setSearchGame] = useState("");

  const [sortOpen, setSortOpen] = useState(false);
  const [sort, setSort] = useState("");

  const toggleSort = () => {
    setSortOpen(!sortOpen);
  };

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
      console.log(data.data, "<<<<<<<<<< hereee");
      

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
    <div>
      {/* Headers */}
      <div className="relative h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Background Image"
            className="object-cover object-center w-full h-full brightness-50"
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

      <h2 id="games" className="mt-10 text-4xl font-extrabold text-white text-center mb-8">
        Games
      </h2>

      {/* Search, Filter, Sort */}
      <div className="container mx-auto px-4 flex justify-between">
        {/* Search */}
        <form
          onSubmit={ReadAllGames}
          className="border border-gray-300 focus-within:border-white focus-within:bg-transparent focus-within:border-2 flex my-auto ms-6 px-6 rounded-lg h-10 lg:w-96"
        >
          <svg
            className="fill-gray-600 mr-3 rotate-90"
            viewBox="0 0 192.904 192.904"
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            value={searchGame}
            onChange={(e) => {
              setSearchGame(e.target.value);
            }}
            className="w-full outline-none bg-transparent text-white font-semibold text-[15px]"
            placeholder="Search games..."
            type="text"
          />
        </form>

        {/*Sort */}
        <div className="my-auto me-6 h-10">
          <div className="relative font-[sans-serif] w-max">
            <button
              onClick={toggleSort}
              className="w-32 justify-center px-4 py-2 flex items-center rounded-lg font-semibold border-2 text-white text-sm border-white outline-none hover:bg-white hover:text-black"
              id="dropdownToggle"
              type="button"
            >
              Sort
            </button>
            {/* Dropdown Menu */}
            {sortOpen && (
              <ul
                className="absolute block shadow-xl bg-white z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto"
                id="dropdownMenu"
              >
                <li className="py-2 px-4 flex items-center hover:bg-black hover:text-white text-black text-sm cursor-pointer">
                  <button onClick={() => setSort("-releasedDate")}>
                    Latest
                  </button>
                </li>
                <li className="py-2 px-4 flex items-center hover:bg-black hover:text-white text-black text-sm cursor-pointer">
                  <button onClick={() => setSort("releasedDate")}>
                    Oldest
                  </button>
                </li>
                <li className="py-2 px-4 flex items-center hover:bg-black hover:text-white text-black text-sm cursor-pointer">
                  <button onClick={() => setSort("-metacriticRating")}>
                    Highest Rating
                  </button>
                </li>
                <li className="py-2 px-4 flex items-center hover:bg-black hover:text-white text-black text-sm cursor-pointer">
                  <button onClick={() => setSort("metacriticRating")}>
                    Lowest Rating
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* No Product Found */}
      {totalPage === 0 && (
        <div className="container my-10 mx-auto px-12 text-3xl text-center text-white font-bold">
          <h3>--- Games Not Found ---</h3>
        </div>
      )}

      {/* Games Card */}
      <div
        className="font-sans p-4 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-md"
      >
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

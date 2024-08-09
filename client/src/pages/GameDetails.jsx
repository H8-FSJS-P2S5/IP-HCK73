import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import instance from "../helpers/instance";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { fetchGameById } from "../features/games/gameSlice";

const GameDetails = () => {
  const game = useSelector((state) => state.games.detail);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchGameById(id));
  }, []);

  return (
    <section className="relative ">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mx-auto max-md:px-2 ">
          <div className="img p-4">
            <div className="img-box h-full max-lg:mx-auto lg:pl-14">
              <img
                alt={game.title}
                className="max-lg:mx-auto lg:ml-auto rounded-xl"
                src={game.imgUrl}
              />
            </div>
          </div>
          <div className="data w-full pr-8 sm:pr-0 justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
            <div className="data w-full max-w-xl">
              <p className="text-lg font-medium leading-8 text-[#c1c1c1] mb-4">
                {game.genre}
              </p>
              <h2 className="font-manrope font-bold text-3xl leading-10 text-white mb-2 capitalize">
                {game.title}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center my-3">
                <img
                  src="https://i.ibb.co.com/3B8P7bB/metacritic-removebg-preview-cut-1.png"
                  alt="metacritic"
                  className="w-36"
                />
                <div className="flex items-center gap-2">
                  <span className="ml-4 py-2 px-3 font-bold text-white text-xl bg-[#49a01d] rounded-sm">
                    {game.metacriticRating}
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-base font-normal mb-5 text-justify">
                {game.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-8">
                <button
                  className="group py-4 px-5 rounded-xl bg-gray-700 text-white font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-gray-800"
                  onClick={async (e) => {
                    e.preventDefault();
                    try {
                      await instance({
                        url: `/favorites`,
                        method: "POST",
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            "access_token"
                          )}`,
                        },
                        data: {
                          GameId: game.id,
                        },
                      });
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        text: `Success add ${game.title} to favorites`,
                        showConfirmButton: false,
                        timer: 2000,
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
                  }}
                >
                  <svg
                    className="w-[24px] h-[24px] text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                  Favorites
                </button>
                <Link to={"/"}>
                  <button className="group py-4 px-5 rounded-xl bg-sky-800 text-white font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-sky-900">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDetails;

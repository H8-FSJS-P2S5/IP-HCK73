import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import instance from "../helpers/instance";
const FavoriteCard = (props) => {
  let { favorite } = props;

  const HandleDeleteFavorite = async (id) => {
    try {
      Swal.fire({
        title: `Delete ${favorite.Game.title}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#b91c1c",
        cancelButtonColor: "#075985",
        confirmButtonText: "Delete",
        background: "#151515",
        color: "white",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            let { data } = await instance({
              url: `/favorites/${id}`,
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            });
            Swal.fire({
              title: "Deleted!",
              text: data.message,
              icon: "success",
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
        }
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
  };

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col h-full">
        <Link
          to={`/games/${favorite.Game.id}`}
          className="w-full h-[150px] overflow-hidden mx-auto aspect-w-16 aspect-h-8"
        >
          <img
            alt={favorite.Game.title}
            className="h-full w-full object-cover rounded-lg hover:opacity-80"
            src={favorite.Game.imgUrl}
          />
        </Link>
        <div className="p-2 flex-1">
          <h3 className="text-lg font-bold text-white">
            {favorite.Game.title}
          </h3>
        </div>
        <div className="p-2 flex justify-between">
          <h4 className="text-base text-[#c1c1c1] font-bold">
            {favorite.Game.genre}
          </h4>
          <div className="flex gap-x-1">
            <svg
              className="pt-1"
              fill="none"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_12029_1640)">
                <path
                  d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                  fill="#FBBF24"
                />
              </g>
              <defs>
                <clipPath id="clip0_12029_1640">
                  <rect fill="white" height="20" width="20" />
                </clipPath>
              </defs>
            </svg>
            <h4 className="text-base text-[#c1c1c1] font-bold">
              {favorite.Game.metacriticRating}
            </h4>
          </div>
        </div>
        <div className="p-2 flex justify-between gap-x-2">
          <button
            className="bg-red-700 font-semibold hover:bg-red-800 text-white text-sm px-2 py-2.5 w-full rounded-lg flex gap-x-1 justify-center"
            type="button"
            onClick={() => HandleDeleteFavorite(favorite.id)}
          >
            <svg
              className="w-[20px] h-[20px] text-white"
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
                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
              />
            </svg>
            Delete
          </button>
          <Link to={`/games/${favorite.Game.id}`} className="w-full">
            <button
              className="bg-sky-800 font-semibold hover:bg-sky-900 text-white text-sm px-2 py-2.5 w-full rounded-lg"
              type="button"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;

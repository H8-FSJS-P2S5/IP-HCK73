import { useEffect, useState } from "react";
import instance from "../helpers/instance";
import FavoriteCard from "../components/FavoriteCard";
import Swal from "sweetalert2";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
      ReadAllFavorites();
    }, []);

    const ReadAllFavorites = async (e) => {
      try {
        let { data } = await instance({
          url: `/favorites`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });

        setFavorites(data);
      } catch (error) {
        console.log(error);
      }
    };

    const HandleDeleteFavorite = async (id) => {
      try {
        Swal.fire({
          title: `Delete?`,
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
                  Authorization: `Bearer ${localStorage.getItem(
                    "access_token"
                  )}`,
                },
              });
              Swal.fire({
                title: "Deleted!",
                text: data.message,
                icon: "success",
              });
              ReadAllFavorites();
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
    <div className="h-full">
      {/* Favorites Card */}
      <div
        className="font-sans p-4 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-md"
      >
        <h2 className="text-4xl font-extrabold text-white text-center mb-8">
          My Favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {favorites.map((favorite) => (
            <FavoriteCard favorite={favorite} HandleDeleteFavorite={HandleDeleteFavorite} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;

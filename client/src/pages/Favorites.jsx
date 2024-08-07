import { useEffect, useState } from "react";
import instance from "../helpers/instance";
import FavoriteCard from "../components/FavoriteCard";

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
            <FavoriteCard favorite={favorite} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;

import { Link } from "react-router-dom";
const GameCard = (props) => {
  let { game } = props;

  return (
    <div className="overflow-hidden cursor-pointer">
      <div className="flex flex-col h-full">
        <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            alt="game"
            className="h-full w-full object-cover rounded-lg hover:opacity-80"
            src={game.imgUrl}
          />
        </div>
        <div className="p-2 flex-1">
          <h3 className="text-xl font-bold text-white">{game.title}</h3>
        </div>
        <div className="p-2 flex justify-between">
          <h4 className="px-2 text-lg text-[#c1c1c1] font-bold mb-3">
            {game.genre}
          </h4>
          <h4 className="px-2 text-lg text-[#c1c1c1] font-bold mb-3">
            {game.genre}
          </h4>
        </div>
        <div>
          <button
            className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full"
            type="button"
          >
            + Favorites
          </button>
        </div>
      </div>
    </div>
    // <Link
    //   to={`/games/${el.id}`}
    //   className="w-11/12 max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4"
    // >
    //   <div className="min-h-[128px]">
    //     <img
    //       className="w-full rounded-lg hover:contrast-[.75] hover:brightness-[1.25] transition-all duration-200"
    //       src={el.imgUrl}
    //     />
    //   </div>
    //   <div className="p-2">
    //     <h3 className="text-white text-xl font-bold">{el.title}</h3>
    //     <div className="flex justify-between pt-4">
    //       <p className="text-sm text-gray-400 leading-relaxed">
    //         Genre {el.genre}
    //       </p>
    //       <p className="text-sm text-gray-400 leading-relaxed">
    //         Rating {el.metacriticRating}
    //       </p>
    //     </div>
    //     <div className="flex justify-between pt-4">
    //       <button
    //         className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 w-full"
    //         type="button"
    //       >
    //         Add to Favorites
    //       </button>
    //       <button
    //         className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 w-full"
    //         type="button"
    //       >
    //         View Details
    //       </button>
    //     </div>
    //   </div>
    // </Link>
  );
};

export default GameCard;

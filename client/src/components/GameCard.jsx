import { Link } from "react-router-dom";
import RupiahFormat from "../helpers/RupiahFormat";
const GameCard = (props) => {
  let { game } = props;

  return (
    <Link
      to={`/games/${el.id}`}
      className="w-11/12 max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4"
    >
      <div className="min-h-[128px]">
        <img
          className="w-full rounded-lg hover:contrast-[.75] hover:brightness-[1.25] transition-all duration-200"
          src={el.imgUrl}
        />
      </div>
      <div className="p-2">
        <h3 className="text-white text-xl font-bold">{el.title}</h3>
        <div className="flex justify-between pt-4">
          <p className="text-sm text-gray-400 leading-relaxed">
            Genre {el.genre}
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Rating {el.metacriticRating}
          </p>
        </div>
        {/* <button
                className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 w-full"
                type="button"
              >
                View
              </button> */}
      </div>
    </Link>
  );
};

export default GameCard;

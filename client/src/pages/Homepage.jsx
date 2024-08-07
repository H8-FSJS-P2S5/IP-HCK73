import { Link, useParams } from "react-router-dom";
import instance from "../helpers/instance";
import { useEffect, useState } from "react";

// let games = [
//   {
//     id: 1,
//     title: "Assassin's Creed Valhalla",
//     description:
//       "Assassin's Creed Valhalla is an open-world action-adventure game set in the Viking era. Players take on the role of Eivor, a fierce Viking warrior, as they embark on a journey from the icy shores of Norway to the lush landscapes of England. The game features a blend of exploration, combat, and storytelling, with an emphasis on building a settlement and forging alliances. With stunning visuals, dynamic weather, and a rich historical backdrop, Valhalla offers an immersive experience for fans of the series.",
//     price: 879000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg?t=1697654233",
//     GenreId: 1,
//     UserId: 2,
//   },
//   {
//     id: 2,
//     title: "Dragon Age: Inquisition",
//     description:
//       "Dragon Age: Inquisition is an epic fantasy RPG that puts players in the role of the Inquisitor, tasked with saving the world of Thedas from a mysterious and powerful force. The game features a rich story, complex characters, and vast, beautiful environments to explore. Players can customize their Inquisitor, build a team of companions, and make choices that affect the outcome of the story. With its deep combat system and engaging narrative, Dragon Age: Inquisition is a standout RPG experience.",
//     price: 529000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222690/header.jpg?t=1668811031",
//     GenreId: 1,
//     UserId: 3,
//   },
//   {
//     id: 3,
//     title: "Monster Hunter Rise",
//     description:
//       "Monster Hunter Rise is an action role-playing game where players take on the role of a hunter tasked with protecting their village from monstrous threats. The game features a variety of weapons and armor, each with unique abilities and playstyles. Players can team up with friends in co-op multiplayer to take down challenging beasts, gather resources, and craft powerful gear. With its vibrant world, dynamic combat, and the introduction of new mechanics like the Wirebug and Palamute companions, Rise offers a fresh and exciting Monster Hunter experience.",
//     price: 729000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1446780/header.jpg?t=1715075183",
//     GenreId: 1,
//     UserId: 4,
//   },
//   {
//     id: 4,
//     title: "Street Fighter V",
//     description:
//       "Street Fighter V is a fighting game that features a diverse roster of characters, each with their own unique moves and fighting styles. Players can engage in fast-paced, strategic battles both online and offline. The game includes a variety of modes, such as story mode, where players can experience character backstories, and ranked matches, where they can compete for glory on the global stage. With its vibrant visuals, deep mechanics, and continuous updates adding new content, Street Fighter V remains a cornerstone of the fighting game community.",
//     price: 529000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/310950/header.jpg?t=1705467952",
//     GenreId: 2,
//     UserId: 4,
//   },
//   {
//     id: 5,
//     title: "Tekken 7",
//     description:
//       "Tekken 7 is a fighting game that continues the long-running Tekken series with a new chapter in the Mishima clan's saga. The game features stunning visuals, an extensive roster of fighters, and deep combat mechanics. Players can engage in intense one-on-one battles, using a combination of punches, kicks, and special moves to defeat their opponents. With its engaging story mode, online multiplayer, and various gameplay modes, Tekken 7 offers a comprehensive fighting game experience.",
//     price: 629000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/389730/header.jpg?t=1703657219",
//     GenreId: 2,
//     UserId: 3,
//   },
//   {
//     id: 6,
//     title: "Mortal Kombat 1",
//     description:
//       "Mortal Kombat 1 is a fighting game known for its brutal combat, iconic characters, and cinematic story. Players can choose from a diverse roster of fighters, each with unique abilities and fatalities. The game features a variety of modes, including story mode, where players can experience the epic narrative, and online multiplayer, where they can compete against others. With its stunning visuals, deep mechanics, and continuous updates, Mortal Kombat 1 remains a standout in the fighting game genre.",
//     price: 759000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1971870/header.jpg?t=1722366487",
//     GenreId: 2,
//     UserId: 1,
//   },
//   {
//     id: 7,
//     title: "Far Cry 6",
//     description:
//       "Far Cry 6 is a first-person shooter set in the fictional tropical paradise of Yara, inspired by Cuba. Players assume the role of Dani Rojas, a local Yaran who joins a guerrilla revolution to overthrow the brutal dictator, Antón Castillo, portrayed by Giancarlo Esposito. The game features a vast open world, with diverse environments ranging from dense jungles to urban areas. Players can engage in various activities, such as liberating outposts, recruiting allies, and crafting weapons, all while experiencing a gripping narrative.",
//     price: 729000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/header.jpg?t=1706823201",
//     GenreId: 3,
//     UserId: 2,
//   },
//   {
//     id: 8,
//     title: "Battlefield 2042",
//     description:
//       "Battlefield 2042 is a first-person shooter set in a near-future world ravaged by climate change and conflict. The game features large-scale battles with up to 128 players, dynamic weather events, and destructible environments. Players can choose from a variety of specialists, each with unique abilities and gadgets, and customize their loadouts to suit their playstyle. With modes like Conquest, Breakthrough, and the all-new Hazard Zone, Battlefield 2042 delivers an intense and immersive multiplayer experience.",
//     price: 879000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/header.jpg?t=1721736024",
//     GenreId: 3,
//     UserId: 3,
//   },
//   {
//     id: 9,
//     title: "COD: Modern Warfare II",
//     description:
//       "Call of Duty: Modern Warfare II is a first-person shooter that continues the acclaimed Modern Warfare series. The game features an intense single-player campaign and a robust multiplayer experience with new modes and maps. Players can engage in fast-paced combat, utilize advanced weaponry, and participate in large-scale battles. With its high-quality graphics, dynamic gameplay, and engaging story, Modern Warfare II offers a thrilling experience for FPS fans.",
//     price: 1049000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962660/header.jpg?t=1710969334",
//     GenreId: 3,
//     UserId: 1,
//   },
//   {
//     id: 10,
//     title: "FC24",
//     description:
//       "FC24 is the latest installment in EA Sports' long-running football simulation series. The game features realistic gameplay mechanics, stunning graphics, and an extensive roster of teams and players from around the world. Players can engage in various modes, including career mode, where they manage a team over multiple seasons, and Ultimate Team, where they build their dream squad. With improvements to AI, physics, and player animations, FC24 offers the most authentic football experience to date.",
//     price: 1049000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg?t=1719935449",
//     GenreId: 4,
//     UserId: 3,
//   },
//   {
//     id: 11,
//     title: "Madden NFL 24",
//     description:
//       "Madden NFL 24 is the latest entry in the long-running American football series from EA Sports. The game features improved gameplay mechanics, realistic player animations, and enhanced AI to provide a more immersive experience. Players can take control of their favorite teams in various modes, including Franchise mode, where they manage all aspects of their team, and Ultimate Team, where they can build their dream squad. With updated rosters, new strategies, and dynamic gameplay, Madden NFL 24 is a must-play for football fans.",
//     price: 1049000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2140330/header.jpg?t=1715696274",
//     GenreId: 4,
//     UserId: 3,
//   },
//   {
//     id: 12,
//     title: "NBA 2K24",
//     description:
//       "NBA 2K24 is the latest installment in the popular basketball simulation series. The game features realistic graphics, updated rosters, and a variety of game modes, including MyCareer, where players can create and develop their own player, and MyTeam, where they can build their ultimate team. With improved gameplay mechanics, new animations, and enhanced AI, NBA 2K24 offers a true-to-life basketball experience for fans of the sport.",
//     price: 1049000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2338770/header.jpg?t=1719588484",
//     GenreId: 4,
//     UserId: 3,
//   },
//   {
//     id: 13,
//     title: "The Crew 2",
//     description:
//       "The Crew 2 is a racing game that allows players to experience the thrill of motorsports across the entire USA. From coast to coast, players can switch seamlessly between cars, bikes, boats, and planes, participating in a variety of events and challenges. The game features an expansive open world with iconic landmarks, realistic physics, and a deep customization system. Whether racing through the streets of New York or flying over the Grand Canyon, The Crew 2 offers a diverse and exhilarating experience for racing enthusiasts.",
//     price: 629000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646910/header.jpg?t=1699983385",
//     GenreId: 5,
//     UserId: 2,
//   },
//   {
//     id: 14,
//     title: "Need for Speed Heat",
//     description:
//       "Need for Speed Heat is a racing game that takes place in the vibrant, neon-lit city of Palm City. By day, players compete in sanctioned events to earn cash for customization and upgrades. By night, they engage in illegal street races to build their reputation. The game features an extensive car customization system, a variety of race types, and a thrilling narrative. With a dynamic day-night cycle and an open world filled with challenges and secrets, Need for Speed Heat offers an adrenaline-fueled racing experience.",
//     price: 729000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg?t=1716831270",
//     GenreId: 5,
//     UserId: 3,
//   },
//   {
//     id: 15,
//     title: "Forza Horizon 5",
//     description:
//       "Forza Horizon 5 is an open-world racing game set in a vibrant and expansive rendition of Mexico. Players can explore diverse environments, from lush jungles and ancient ruins to bustling cities and beautiful beaches. The game features a wide range of cars and customization options, as well as dynamic weather and seasonal changes that impact gameplay. With its stunning visuals, detailed car models, and engaging events, Forza Horizon 5 offers an immersive and exhilarating racing experience.",
//     price: 879000,
//     imgUrl:
//       "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1721149726",
//     GenreId: 5,
//     UserId: 1,
//   },
// ];

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
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden snap-start">
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
            Welcome to Our Awesome Website
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover amazing features and services that await you.
          </p>
          <a className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Get Started
          </a>
        </div>
      </div>
      {/* Games Card */}
      <div className="mt-10 grid grid-cols-1 gap-x-0.5 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 snap-start">
        {/* PerCard */}
        {games.map((el) => (
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
                <p className="text-sm text-[#c1c1c1] leading-relaxed">
                  {el.genre}
                </p>
                <p className="text-sm text-[#c1c1c1] leading-relaxed">
                  {el.metacriticRating} / 100
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
        ))}
      </div>

      {/* Pagination */}
      {totalPage > 0 && (
        <div className="mb-6">
          <ul className="font-[sans-serif] flex mx-auto border-2 divide-x-2 border-white rounded w-max mt-4">
            {currentPage !== 1 && (
              <li
                onClick={prevPage}
                className="px-5 py-2.5 flex items-center justify-center shrink-0 cursor-pointer text-sm font-semibold text-[#c1c1c1] min-w-[110px] hover:bg-white hover:text-black"
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
                className="px-5 py-2.5 flex items-center justify-center shrink-0 cursor-pointer text-sm font-semibold text-[#c1c1c1] min-w-[110px] hover:bg-white hover:text-black"
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

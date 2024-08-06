// const { axios } = require("axios");

const axios = require("axios");

const fetchAllData = async () => {
  try {
    let { data } = await axios.get(
      "https://api.rawg.io/api/games?key=2efc51772fc64d7c899a758a30db208f&dates=2010-01-01,2024-12-31&platforms=4&metacritic=87,100&ordering=-metacritic&exclude_stores=5,6&page_size=40"
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchAllData();

// let result = async () => {
//   try {
//     await fetchAllData()
//     console.log(data);

//   } catch (error) {
//     console.log(error);
//   }
// };

// console.log(result());

// -----------------------------------------------------------

// const fetchAllData = async () => {
//   try {
//     let response = await axios.get(
//       "https://api.rawg.io/api/games?key=2efc51772fc64d7c899a758a30db208f&dates=2010-01-01,2024-12-31&platforms=4&metacritic=87,100&ordering=-metacritic&exclude_stores=5,6&page_size=40"
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

//  let data = require("../data/users.json");
//  data = data.map((el) => {
//    el.password = hashPassword(el.password);
//    el.createdAt = el.updatedAt = new Date();
//    return el;
//  });
//  await queryInterface.bulkInsert("Users", data, {});

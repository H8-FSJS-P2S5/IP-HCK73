"use strict";
require("dotenv").config();

const { default: axios } = require("axios");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let allData = [];
    let page = 1;
    let nextPage = true;

    const fetchPageData = async (page) => {
      let { data } = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&dates=2010-01-01,2024-12-31&platforms=4&metacritic=87,100&ordering=-metacritic&exclude_stores=5,6&page_size=40&page=${page}`
      );
      return data;
    };

    const fetchGameDetails = async (id) => {
      let { data } = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${process.env.RAWG_API_KEY}`
      );
      if (data.description_raw === "") {
        data.description_raw =
          "Immerse yourself in a captivating gaming experience where adventure awaits at every turn. This game offers a rich and dynamic world filled with engaging challenges and opportunities for exploration. Players are invited to embark on a journey through a beautifully crafted environment, uncovering hidden secrets and overcoming obstacles along the way.\nThe gameplay is designed to be both intuitive and rewarding, allowing players to master various skills and strategies as they progress. Whether you prefer solving intricate puzzles, engaging in strategic combat, or building and crafting, the game provides a variety of activities to suit different playstyles.";
      }
      data.description_raw.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "");
      return data.description_raw;
    };

    while (nextPage) {
      let data = await fetchPageData(page);
      if (data.results.length > 0) {
        for (const el of data.results) {
          try {
            const description = await fetchGameDetails(el.id);
            allData.push({
              title: el.name,
              description: description,
              genre: el.genres[0].name,
              imgUrl: el.background_image,
              releasedDate: el.released,
              metacriticRating: el.metacritic,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
          } catch (error) {
            console.log(error);
          }
        }
        page++;
      }
      if (!data.next) {
        nextPage = false;
      }
    }

    await queryInterface.bulkInsert("Games", allData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Games", null, {});
  },
};

'use strict';
require('dotenv').config()
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
    const apiKey = process.env.API_KEY
    const baseUrl = 'https://api.core.openaip.net/api/airports';
    let page = 1;
    let allData = [];

    while (true) {
      let { data } = await axios.get(baseUrl, {
        headers: {
          'x-openaip-client-id': apiKey
        },
        params: {
          page: page
        }
      });

      allData = allData.concat(data.items);

      if (data.nextPage) {
        page = data.nextPage;
      } else {
        break;
      }
    }

    // Filter and process airports from Indonesia
    let indoAirports = allData.filter(airport => airport.country === 'ID');
    let insertData = [];

    indoAirports.forEach((el) => {
      let runway1 = '';
      let runway2 = '';

      if (el.runways && Array.isArray(el.runways)) {
        runway1 = el.runways.slice(0, 2).map(r => r.designator).join(', ');
        runway2 = el.runways.slice(2, 4).map(r => r.designator).join(', ');
      }

      insertData.push({
        airportCode: el._id,
        name: el.name,
        country: el.country,
        private: el.private,
        iataCode: el.iataCode,
        icaoCode: el.icaoCode,
        runway1: runway1,
        runway2: runway2,
        elevation: el.elevation.value,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });

    await queryInterface.bulkInsert('Airports', insertData, {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airports', null, {});
  }
};

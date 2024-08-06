// const axios = require('axios/dist/node/axios.cjs')
// const axios = require('axios/dist/node/axios.cjs')

const { default: axios } = require("axios");
// const fetch = async () => {
//     const apiKey = 'a01dcf3500745576fedd8e988af6bfb1';
//     try {
//         let { data } = await axios.get('https://api.core.openaip.net/api/airports', {
//             headers: {
//                 'x-openaip-client-id': apiKey
//             }
//         });
        
//         let indoAirport = data.items.filter(airport => airport.country === 'ID');

//         indoAirport.map((el) => {
//             let runway1 = '';
//             let runway2 = '';

//             if (el.runways && Array.isArray(el.runways)) {
//                 runway1 = el.runways.slice(0, 2).map(r => r.designator).join(', ');
//                 runway2 = el.runways.slice(2, 4).map(r => r.designator).join(', ');
//             }

//             let newData = {
//                 airportCode: el._id,
//                 name: el.name,
//                 country: el.country,
//                 private: el.private,
//                 iataCode: el.iataCode,
//                 icaoCode: el.icaoCode,
//                 runway1: runway1,
//                 runway2: runway2,
//                 elevation: el.elevation.value
//             };

//             console.log(newData);
//             return newData;
//         });
//     } catch (error) {
//         console.error(error);
//     }
// };

// fetch();

// const axios = require('axios');

const fetchAllPages = async () => {
    const apiKey = 'a01dcf3500745576fedd8e988af6bfb1';
    const baseUrl = 'https://api.core.openaip.net/api/airports';
    let page = 1;
    let allData = [];

    try {
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

        let indoAirports = allData.filter(airport => airport.country === 'ID');
        indoAirports.map((el) => {
            let runway1;
            let runway2;

            if (el.runways && Array.isArray(el.runways)) {
                runway1 = el.runways.slice(0, 2).map(r => r.designator).join(', ');
                runway2 = el.runways.slice(2, 4).map(r => r.designator).join(', ');
            }

            let newData = {
                airportCode: el._id,
                name: el.name,
                country: el.country,
                private: el.private,
                iataCode: el.iataCode,
                icaoCode: el.icaoCode,
                runway1: runway1,
                runway2: runway2,
                elevation: el.elevation.value
            };

            console.log(newData);
            return newData;
        });
    } catch (error) {
        console.error(error);
    }
};

fetchAllPages();

    
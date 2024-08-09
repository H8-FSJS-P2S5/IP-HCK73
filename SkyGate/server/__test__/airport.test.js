const { test, expect, describe, beforeAll, afterAll } = require('@jest/globals')
const request = require('supertest')
const app = require('../app')
const { User, Airport, Review } = require('../models')
const { signToken, verifyToken } = require('../helpers/jwt')

let token;
let reviewId;
let aCode;

beforeAll(async () => {
    let userData = {
        "email": "admin@mail.com",
        "password": "12345"
    }
    let airportList = {
        "airportCode": "62614bb4cb27f4250944d28e",
        "name": "NGURAH RAI (BALI) INTERNATIONAL AIRPORT",
        "country": "ID",
        "private": false,
        "iataCode": "DPS",
        "icaoCode": "WADD",
        "runway1": "09, 27",
        "runway2": "",
        "elevation": 4,
    }
    let user = await User.create(userData)
    let airport = await Airport.create(airportList)
    aCode = airport.airportCode

    let reviewAirport = {
        "UserId": user.id,
        "AirportId": airport.id,
        "rate": 8,
        "comment": "Pelayanan staff bandara disini sangat ramah dan bandaranya bersih"
    }

    let review = await Review.create(reviewAirport)
    reviewId = review.id

    token = signToken({ id: user.id })
})

afterAll(async () => {
    await User.destroy({
        truncate: true,
        cascade: true,
        restartIdentity: true
    })
    await Airport.destroy({
        truncate: true,
        cascade: true,
        restartIdentity: true
    })
    await Review.destroy({
        truncate: true,
        cascade: true,
        restartIdentity: true
    })
})

describe('GET /airports', () => {
    let airport = {
        "airportCode": "62614bb4cb27f4250944d28e",
        "name": "NGURAH RAI (BALI) INTERNATIONAL AIRPORT",
        "country": "ID",
        "private": false,
        "iataCode": "DPS",
        "icaoCode": "WADD",
        "runway1": "09, 27",
        "runway2": "",
        "elevation": 4,
    }
    test('GET /airports login to see airport list', async () => {
        let response = await request(app).get('/airports').set('authorization', `Bearer ${token}`).send(airport)
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('data')
        const airportData = response.body.data[0];
        expect(airportData).toHaveProperty('id', expect.any(Number))
        expect(airportData).toHaveProperty('airportCode', airportData.airportCode)
        expect(airportData).toHaveProperty('name', airportData.name)
        expect(airportData).toHaveProperty('country', airportData.country)
        expect(airportData).toHaveProperty('private', airportData.private)
        expect(airportData).toHaveProperty('iataCode', airportData.iataCode)
        expect(airportData).toHaveProperty('icaoCode', airportData.icaoCode)
        expect(airportData).toHaveProperty('runway1', airportData.runway1)
        expect(airportData).toHaveProperty('runway2', airportData.runway2)
        expect(airportData).toHaveProperty('elevation', airportData.elevation)
    })
    test('GET /airports/:airportCode login to see airport detail', async () => {
        let response = await request(app).get(`/airports/${aCode}`).set('authorization', `Bearer ${token}`).send(airport)
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('id', expect.any(Number))
        expect(response.body).toHaveProperty('airportCode', airport.airportCode)
        expect(response.body).toHaveProperty('name', airport.name)
        expect(response.body).toHaveProperty('country', airport.country)
        expect(response.body).toHaveProperty('private', airport.private)
        expect(response.body).toHaveProperty('iataCode', airport.iataCode)
        expect(response.body).toHaveProperty('icaoCode', airport.icaoCode)
        expect(response.body).toHaveProperty('runway1', airport.runway1)
        expect(response.body).toHaveProperty('runway2', airport.runway2)
        expect(response.body).toHaveProperty('elevation', airport.elevation)
    })
    test('GET /airports/:airportCode login to see airport detail', async () => {
        let response = await request(app).get(`/airports/123098`).set('authorization', `Bearer ${token}`).send(airport)
        expect(response.status).toBe(404)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('message', 'Airport not found')
    })
})

describe('POST /airports/:airportCode/reviews', () => {
    let airport, user;

    beforeAll(async () => {
        user = await User.create({
            email: "admin@mail.com",
            password: "12345"
        });

        airport = await Airport.create({
            airportCode: "DPS",
            name: "NGURAH RAI (BALI) INTERNATIONAL AIRPORT",
            country: "ID",
            private: false,
            iataCode: "DPS",
            icaoCode: "WADD",
            runway1: "09, 27",
            runway2: "",
            elevation: 4
        });

        token = signToken({ id: user.id });
    });

    test('POST /airports/:airportCode/reviews login to add reviews in airport detail', async () => {
        let review = {
            UserId: user.id,
            AirportId: airport.id,
            rate: 8,
            comment: "Pelayanan staff bandara disini sangat ramah, namun pelayanan di check-in counter masih bisa ditingkatkan karena cukup mengantri panjang"
        };

        let response = await request(app).post(`/airports/${airport.airportCode}/reviews`).set('authorization', `Bearer ${token}`).send(review);

        expect(response.status).toBe(201);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('id', expect.any(Number));
        expect(response.body).toHaveProperty('UserId', review.UserId);
        expect(response.body).toHaveProperty('AirportId', review.AirportId);
        expect(response.body).toHaveProperty('rate', review.rate);
        expect(response.body).toHaveProperty('comment', review.comment);
    })
    test('POST /airports/:airportCode/reviews not logged in to add reviews in airport detail', async () => {
        let review = {
            UserId: user.id,
            AirportId: airport.id,
            rate: 8,
            comment: "Pelayanan staff bandara disini sangat ramah, namun pelayanan di check-in counter masih bisa ditingkatkan karena cukup mengantri panjang"
        };
        let response = await request(app).post(`/airports/${airport.airportCode}/reviews`).set('authorization', `Bearer ${!token}`).send(review);
        expect(response.status).toBe(401);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('message', 'Access denied. Login required');
    });
})

describe('DELETE /airports/:airportCode/reviews/:id', () => {
    let airport, user, reviewId;

    beforeAll(async () => {
        user = await User.create({
            email: "admin@mail.com",
            password: "12345"
        });

        airport = await Airport.create({
            airportCode: "DPS",
            name: "NGURAH RAI (BALI) INTERNATIONAL AIRPORT",
            country: "ID",
            private: false,
            iataCode: "DPS",
            icaoCode: "WADD",
            runway1: "09, 27",
            runway2: "",
            elevation: 4
        });

        const review = {
            UserId: user.id,
            AirportId: airport.id,
            rate: 8,
            comment: "Pelayanan staff bandara disini sangat ramah, namun pelayanan di check-in counter masih bisa ditingkatkan karena cukup mengantri panjang"
        };
        
        const createdReview = await Review.create(review);
        reviewId = createdReview.id;

        token = signToken({ id: user.id });
    });

    test('DELETE /airports/:airportCode/reviews/:id login to delete reviews in airport detail', async () => {
        let response = await request(app)
            .delete(`/airports/${airport.airportCode}/reviews/${reviewId}`)
            .set('authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('message', 'Review has been deleted');
    });
    test('DELETE /airports/:airportCode/reviews/:id reviews not found', async () => {
        let response = await request(app)
            .delete(`/airports/${airport.airportCode}/reviews/2392`)
            .set('authorization', `Bearer ${token}`);
        expect(response.status).toBe(404);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('message', 'Review not found');
    });
    test('DELETE /airports/:airportCode/reviews/:id not logged in to delete reviews in airport detail', async () => {
        let response = await request(app)
            .delete(`/airports/${airport.airportCode}/reviews/${reviewId}`)
            .set('authorization', `Bearer ${!token}`);
        expect(response.status).toBe(401);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('message', 'Access denied. Login required');
    });
});

describe('PUT /airports/:airportCode/reviews/:id', () => {
    let token, reviewId;
    let airport, user;

    beforeAll(async () => {
        user = await User.create({
            email: "admin@mail.com",
            password: "12345"
        });

        airport = await Airport.create({
            airportCode: "DPS",
            name: "NGURAH RAI (BALI) INTERNATIONAL AIRPORT",
            country: "ID",
            private: false,
            iataCode: "DPS",
            icaoCode: "WADD",
            runway1: "09, 27",
            runway2: "",
            elevation: 4
        });

        const review = await Review.create({
            UserId: user.id,
            AirportId: airport.id,
            rate: 8,
            comment: "Pelayanan staff bandara disini sangat ramah, namun pelayanan di check-in counter masih bisa ditingkatkan karena cukup mengantri panjang"
        });

        reviewId = review.id;
        token = signToken({ id: user.id });
    });

    test('PUT /airports/:airportCode/reviews/:id login to edit reviews in airport detail', async () => {
        let review = {
            UserId: user.id,
            AirportId: airport.id,
            rate: 9,
            comment: "Pelayanan staff bandara disini sangat ramah, namun pelayanan di check-in counter masih bisa ditingkatkan karena cukup mengantri panjang"
        };

        let response = await request(app).put(`/airports/${airport.airportCode}/reviews/${reviewId}`).set('authorization', `Bearer ${token}`).send(review);
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('id', expect.any(Number));
        expect(response.body).toHaveProperty('UserId', review.UserId);
        expect(response.body).toHaveProperty('AirportId', review.AirportId);
        expect(response.body).toHaveProperty('rate', review.rate);
        expect(response.body).toHaveProperty('comment', review.comment);
    });

    test('PUT /airports/:airportCode/reviews/:id not logged in to edit reviews in airport detail', async () => {
        let review = {
            UserId: user.id,
            AirportId: airport.id,
            rate: 8,
            comment: "Pelayanan staff bandara disini sangat ramah, namun pelayanan di check-in counter masih bisa ditingkatkan karena cukup mengantri panjang"
        };
        let response = await request(app).put(`/airports/${airport.airportCode}/reviews/${reviewId}`).send(review);
        expect(response.status).toBe(401);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('message', 'Access denied. Login required');
    });

    test('PUT /airports/:airportCode/reviews/:id reviews not found', async () => {
        let review = {
            UserId: user.id,
            AirportId: airport.id,
            rate: 8,
            comment: "Pelayanan staff bandara disini sangat ramah, namun pelayanan di check-in counter masih bisa ditingkatkan karena cukup mengantri panjang"
        };
        let response = await request(app).put(`/airports/${airport.airportCode}/reviews/2392`).set('authorization', `Bearer ${token}`).send(review);
        expect(response.status).toBe(404);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('message', 'Review not found');
    });
});

const { test, expect, describe, beforeAll, afterAll } = require('@jest/globals')
const request = require('supertest')
const app = require('../app')
const { User } = require('../models')
const { signToken, verifyToken } = require('../helpers/jwt')

let token;
beforeAll(async () => {
    let userData = {
        "email": "admin@mail.com",
        "password": "12345"
    }
    let user = await User.create(userData)
    token = signToken({id: user.id})
})

afterAll(async () => {
    await User.destroy({
        truncate: true,
        cascade: true,
        restartIdentity: true
    })
})

describe('POST /register', () => {
    test('POST /register should be performed successfully and return id and email', async () => {
        let newUser = {
            "email": "admin@mail.com",
            "password": "12345"
        }
        let response = await request(app).post('/register').send(newUser)
        expect(response.status).toBe(201)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('id', expect.any(Number))
        expect(response.body).toHaveProperty('email', newUser.email)
    })
    // test('POST /register with duplicate email should return 400', async () => {
    //     let newUser = {
    //         "email": "admin@mail.com",
    //         "password": "12345"
    //     }
    //     let response = await request(app).post('/register').send(newUser, userNew)
    //     expect(response.status).toBe(400)
    //     expect(response.body).toBeInstanceOf(Object)
    //     expect(response.body).toHaveProperty('message', 'Email must be unique')
    // })
    test('POST /register without email shouold return 400', async () => {
        let otherUser = {
            "password": "12345"
        }
        let response = await request(app).post('/register').send(otherUser)
        expect(response.status).toBe(400)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('message', 'Email required')
    })
    test('POST /register wrong email format shouold return 400', async () => {
        let otherUser = {
            "email": "adminmail.com",
            "password": "12345"
        }
        let response = await request(app).post('/register').send(otherUser)
        expect(response.status).toBe(400)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('message', 'Wrong email format')
    })
    test('POST /register without password shouold return 400', async () => {
        let otherUser = {
            "email": "admin@mail.com",
        }
        let response = await request(app).post('/register').send(otherUser)
        expect(response.status).toBe(400)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('message', 'Password required')
    })
})
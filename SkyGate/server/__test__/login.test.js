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

describe('POST /login', () => {
    test('POST /login should be perfom successfully and send access_token', async () => {
        let newLogin = {
            "email": "admin@mail.com",
            "password": "12345"
        }
        let response = await request(app).post('/login').send(newLogin)
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('access_token', expect.any(String))
    })
    test('POST /login email required', async () => {
        let newLogin = {
            "password": "12345"
        }
        let response = await request(app).post('/login').send(newLogin)
        expect(response.status).toBe(400)
        expect(response.body).toBeInstanceOf(Object)
    })
    test('POST /login password required', async () => {
        let newLogin = {
            "email": "admin@mail.com"
        }
        let response = await request(app).post('/login').send(newLogin)
        expect(response.status).toBe(400)
        expect(response.body).toBeInstanceOf(Object)
    })
    test('POST /login email invalid', async () => {
        let newLogin = {
            "email": "waduh@wadaw.com",
            "password": "12345"
        }
        let response = await request(app).post('/login').send(newLogin)
        expect(response.status).toBe(401)
        expect(response.body).toBeInstanceOf(Object)
    })
    test('POST /login password invalid', async () => {
        let newLogin = {
            "email": "admin@mail.com",
            "password": "123455"
        }
        let response = await request(app).post('/login').send(newLogin)
        expect(response.status).toBe(401)
        expect(response.body).toBeInstanceOf(Object)
    })
})
const app = require("../app");
const {
  test,
  expect,
  describe,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
} = require("@jest/globals");
const request = require("supertest");
const { User , Recipe } = require("../models");
const { signToken, verifyToken } = require("../helper/jwt");

let user_token;

beforeAll(async () => {
  let creat_user = {
    name: "testUser",
    email: "test!@mail.com",
    password: "12345",
  };

  await User.create(creat_user);
});

afterAll(async () => {
  await User.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await Recipe.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
});


describe("POST" ,)
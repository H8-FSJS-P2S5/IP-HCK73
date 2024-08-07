const app = require("../app");
const {
  test,
  expect,
  describe,
  beforeAll,
  afterAll,
} = require("@jest/globals");
const request = require("supertest");
const { User } = require("../models");
const { signToken } = require("../helpers/jwt");

let token;

beforeAll(async () => {
  await User.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });

  let newUser = {
    username: "janedoe",
    email: "janedoe@example.com",
    password: "secure",
  };
  let user = await User.create(newUser);
  token = signToken({ id: user.id });
});

describe("POST /register", () => {
  test("should return username & email if success", async () => {
    let response = await request(app).post("/register").send({
      username: "janedoe1",
      email: "janedoe1@example.com",
      password: "secure1",
    });
    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("username", expect.any(String));
    expect(response.body).toHaveProperty("email", expect.any(String));
  });

  test("should be failed if username is null", async () => {
    let response = await request(app).post("/register").send({
      username: "",
      email: "janedoe@example.com",
      password: "secure",
    });
    expect(response.status).toBe(400);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Username is required");
  });

  test("should be failed if email is null", async () => {
    let response = await request(app).post("/register").send({
      username: "janedoe",
      email: "",
      password: "secure",
    });
    expect(response.status).toBe(400);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Email is required");
  });

  test("should be failed if password is null", async () => {
    let response = await request(app).post("/register").send({
      username: "janedoe",
      email: "janedoe@example.com",
      password: "",
    });
    expect(response.status).toBe(400);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Password is required");
  });
});

describe("POST /login", () => {
  test("success login should return access token", async () => {
    let response = await request(app).post("/login").send({
      email: "janedoe@example.com",
      password: "secure",
    });

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("access_token", expect.any(String));
  });

  test("should be failed if email is null", async () => {
    let response = await request(app).post("/login").send({
      email: "",
      password: "secure",
    });

    expect(response.status).toBe(400);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Email is required");
  });

  test("should be failed if password is null", async () => {
    let response = await request(app).post("/login").send({
      email: "janedoe@example.com",
      password: "",
    });

    expect(response.status).toBe(400);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Password is required");
  });

  test("should be failed if email is invalid", async () => {
    let response = await request(app).post("/login").send({
      email: "janedoeeee@example.com",
      password: "secure",
    });

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty(
      "message",
      "Error invalid email or password"
    );
  });

  test("should be failed if password is not match", async () => {
    let response = await request(app).post("/login").send({
      email: "janedoe@example.com",
      password: "secure123",
    });

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty(
      "message",
      "Error invalid email or password"
    );
  });
});

describe("PUT /editProfile", () => {
  let updatedUser = {
    username: "janedoe updated",
    email: "janedoe@example.com",
    password: "secure",
  };

  test("should return success message if success", async () => {
    let response = await request(app).put("/editProfile")
      .set("Authorization", `Bearer ${token}`)
      .send(updatedUser);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty(
      "message",
      "Success update user profile"
    );
  });

  test("should be failed if input is invalid", async () => {
    let invalidInput = {
      username: "",
      email: "janedoe@example.com",
      password: "",
    };

    let response = await request(app).put("/editProfile")
      .set("Authorization", `Bearer ${token}`)
      .send(invalidInput);

    expect(response.status).toBe(400);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", expect.any(String));
  });

  test("should be failed if not logged in", async () => {
    let response = await request(app).put("/editProfile");

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Error authentication");
  });

  test("should be failed if token is invalid", async () => {
    let response = await request(app)
      .put("/editProfile")
      .set("Authorization", "Bearer invalidToken");

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Error authentication");
  });
});

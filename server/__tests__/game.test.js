const app = require("../app");
const {
  test,
  expect,
  describe,
  beforeAll,
  afterAll,
} = require("@jest/globals");
const request = require("supertest");
const { User, Game } = require("../models");
const { signToken } = require("../helpers/jwt");

let token;

beforeAll(async () => {
  await Game.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });

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

  for (let i = 1; i <= 20; i++) {
    let newGame = {
      title: `${i} Game`,
      description:
        "America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age.",
      genre: "Action",
      imgUrl:
        "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
      releasedDate: "2018-10-26 07:00:00.000 +0700",
      metacriticRating: 96,
    };
    await Game.create(newGame);
  }
});

describe("GET /games", () => {
  test("success get all Games without query filter parameter", async () => {
    let response = await request(app)
      .get("/games")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("page", expect.any(Number));
    expect(response.body).toHaveProperty("data", expect.any(Array));
    expect(response.body).toHaveProperty("totalData", expect.any(Number));
    expect(response.body).toHaveProperty("totalPage", expect.any(Number));
    expect(response.body).toHaveProperty("dataPerPage", expect.any(Number));
    expect(response.body.data[0]).toHaveProperty("id", expect.any(Number));
    expect(response.body.data[0]).toHaveProperty("title", expect.any(String));
    expect(response.body.data[0]).toHaveProperty(
      "description",
      expect.any(String)
    );
    expect(response.body.data[0]).toHaveProperty("genre", expect.any(String));
    expect(response.body.data[0]).toHaveProperty("imgUrl", expect.any(String));
    expect(response.body.data[0]).toHaveProperty(
      "releasedDate",
      expect.any(String)
    );
    expect(response.body.data[0]).toHaveProperty(
      "metacriticRating",
      expect.any(Number)
    );
  });

  test("GET /games?search=[title] success get all Games that contains the title", async () => {
    let response = await request(app)
      .get("/games?search=game")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("page", expect.any(Number));
    expect(response.body).toHaveProperty("data", expect.any(Array));
    expect(response.body).toHaveProperty("totalData", expect.any(Number));
    expect(response.body).toHaveProperty("totalPage", expect.any(Number));
    expect(response.body).toHaveProperty("dataPerPage", expect.any(Number));
    expect(response.body.data[0]).toHaveProperty("id", expect.any(Number));
    expect(response.body.data[0]).toHaveProperty("title", expect.any(String));
    expect(response.body.data[0]).toHaveProperty(
      "description",
      expect.any(String)
    );
    expect(response.body.data[0]).toHaveProperty("genre", expect.any(String));
    expect(response.body.data[0]).toHaveProperty("imgUrl", expect.any(String));
    expect(response.body.data[0]).toHaveProperty(
      "releasedDate",
      expect.any(String)
    );
    expect(response.body.data[0]).toHaveProperty(
      "metacriticRating",
      expect.any(Number)
    );
  });

  test("GET /games?page[number]=[pageNumber] success get all Games with correct number of data per page", async () => {
    let response = await request(app)
      .get("/games?page[number]=2")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("page", expect.any(Number));
    expect(response.body).toHaveProperty("data", expect.any(Array));
    expect(response.body).toHaveProperty("totalData", expect.any(Number));
    expect(response.body).toHaveProperty("totalPage", expect.any(Number));
    expect(response.body).toHaveProperty("dataPerPage", expect.any(Number));
    expect(response.body.data[0]).toHaveProperty("id", expect.any(Number));
    expect(response.body.data[0]).toHaveProperty("title", expect.any(String));
    expect(response.body.data[0]).toHaveProperty(
      "description",
      expect.any(String)
    );
    expect(response.body.data[0]).toHaveProperty("genre", expect.any(String));
    expect(response.body.data[0]).toHaveProperty("imgUrl", expect.any(String));
    expect(response.body.data[0]).toHaveProperty(
      "releasedDate",
      expect.any(String)
    );
    expect(response.body.data[0]).toHaveProperty(
      "metacriticRating",
      expect.any(Number)
    );
  });

  test("GET /games?sort=[property] success get all Games sorted with the parameters or property", async () => {
    let response = await request(app)
      .get("/games?sort=title")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("page", expect.any(Number));
    expect(response.body).toHaveProperty("data", expect.any(Array));
    expect(response.body).toHaveProperty("totalData", expect.any(Number));
    expect(response.body).toHaveProperty("totalPage", expect.any(Number));
    expect(response.body).toHaveProperty("dataPerPage", expect.any(Number));
    expect(response.body.data[0]).toHaveProperty("id", expect.any(Number));
    expect(response.body.data[0]).toHaveProperty("title", expect.any(String));
    expect(response.body.data[0]).toHaveProperty(
      "description",
      expect.any(String)
    );
    expect(response.body.data[0]).toHaveProperty("genre", expect.any(String));
    expect(response.body.data[0]).toHaveProperty("imgUrl", expect.any(String));
    expect(response.body.data[0]).toHaveProperty(
      "releasedDate",
      expect.any(String)
    );
    expect(response.body.data[0]).toHaveProperty(
      "metacriticRating",
      expect.any(Number)
    );
  });

  test("should be failed if not logged in", async () => {
    let response = await request(app).get("/games");

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Error authentication");
  });

  test("should be failed if token is invalid", async () => {
    let response = await request(app)
      .get("/games")
      .set("Authorization", "Bearer invalidToken");

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Error authentication");
  });
});

describe("POST /games/recommendations", () => {
  test("success get game recommendations based on genre", async () => {
    let response = await request(app)
      .post("/games/recommendations")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body[0]).toHaveProperty("id", expect.any(Number));
    expect(response.body[0]).toHaveProperty("genre", expect.any(String));
    expect(response.body[0]).toHaveProperty("imgUrl", expect.any(String));
    expect(response.body[0]).toHaveProperty(
      "metacriticRating",
      expect.any(Number)
    );
  });

  test("should be failed if not logged in", async () => {
    let response = await request(app).get("/games/200");

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Error authentication");
  });

  test("should be failed if token is invalid", async () => {
    let response = await request(app)
      .get("/games/1")
      .set("Authorization", "Bearer invalidToken");

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Error authentication");
  });
});

describe("GET /games/:id", () => {
  test("success get game based on params id", async () => {
    let response = await request(app)
      .get("/games/1")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("id", expect.any(Number));
    expect(response.body).toHaveProperty("title", expect.any(String));
    expect(response.body).toHaveProperty("description", expect.any(String));
    expect(response.body).toHaveProperty("genre", expect.any(String));
    expect(response.body).toHaveProperty("imgUrl", expect.any(String));
    expect(response.body).toHaveProperty("releasedDate", expect.any(String));
    expect(response.body).toHaveProperty(
      "metacriticRating",
      expect.any(Number)
    );
  });

  test("should be failed if Game is not in database", async () => {
    let response = await request(app)
      .get("/games/200")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Data not found");
  });

  test("should be failed if not logged in", async () => {
    let response = await request(app).get("/games/200");

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Error authentication");
  });

  test("should be failed if token is invalid", async () => {
    let response = await request(app)
      .get("/games/1")
      .set("Authorization", "Bearer invalidToken");

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Error authentication");
  });
});

const app = require("../app");
const {
  test,
  expect,
  describe,
  beforeAll,
  afterAll,
} = require("@jest/globals");
const request = require("supertest");
const { User, Game, Favorite } = require("../models");
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

  await Favorite.destroy({
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

  let newFavorite = {
    UserId: 1,
    GameId: 1,
  };
  let favorite = await Favorite.create(newFavorite);
});

describe("GET /favorites", () => {
  test("should return all favorites if success", async () => {
    let response = await request(app)
      .get("/favorites")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("UserId", expect.any(Number));
    expect(response.body).toHaveProperty("GameId", expect.any(Number));
  });

  test("should be failed if not logged in", async () => {
    let response = await request(app).get("/favorites");

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Error authentication");
  });

  test("should be failed if token is invalid", async () => {
    let response = await request(app)
      .get("/favorites")
      .set("Authorization", "Bearer invalidToken");

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Error authentication");
  });
});

describe("POST /favorites", () => {
  let newFavorite = {
    UserId: 1,
    GameId: 2,
  };

  test("should return new favorite if success", async () => {
    let response = await request(app)
      .post("/favorites")
      .set("Authorization", `Bearer ${token}`)
      .send(newFavorite);

    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("UserId", expect.newFavorite.UserId);
    expect(response.body).toHaveProperty("GameId", expect.newFavorite.GameId);
  });

  test("should be failed if not logged in", async () => {
    let response = await request(app).post("/favorites");

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Error authentication");
  });

  test("should be failed if token is invalid", async () => {
    let response = await request(app)
      .post("/favorites")
      .set("Authorization", "Bearer invalidToken");

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Error authentication");
  });
});

describe("DELETE /favorites/:id", () => {
  test("should return new favorite if success", async () => {
    let response = await request(app)
      .delete("/favorites/1")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", expect.any(String));
  });

  test("should be failed if not logged in", async () => {
    let response = await request(app).delete("/favorites/1");

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Error authentication");
  });

  test("should be failed if token is invalid", async () => {
    let response = await request(app)
      .delete("/favorites")
      .set("Authorization", "Bearer invalidToken");

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Error authentication");
  });

  test("should be failed if favorites is not in database", async () => {
    let response = await request(app)
      .delete("/favorites/200")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Data not found");
  });
});

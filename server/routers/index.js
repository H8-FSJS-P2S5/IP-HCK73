const express = require("express");
const UserController = require("../controllers/UserController");
const GameController = require("../controllers/GameController");
const FavoriteController = require("../controllers/FavoriteController");
const isAuthenticated = require("../middleware/isAuthenticated");
const router = express.Router();


router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/user", isAuthenticated, UserController.getUser);
router.put("/editProfile", isAuthenticated, UserController.editProfile);

router.post("/auth/google", UserController.googleLogin);

router.get("/games", isAuthenticated, GameController.readAllGames);
router.post("/games/recommendations", isAuthenticated, GameController.askRecommendations);
router.get("/games/:id", isAuthenticated, GameController.getGameById);

router.get("/favorites", isAuthenticated, FavoriteController.readAllFavorites);
router.post("/favorites", isAuthenticated, FavoriteController.createFavorite);
router.delete(
  "/favorites/:id",
  isAuthenticated,
  FavoriteController.deleteFavoriteById
);

module.exports = router;

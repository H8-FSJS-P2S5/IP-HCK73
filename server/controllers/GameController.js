const { Game, User, Favorite } = require("../models");
const { Op } = require("sequelize");

class GameController {
  static async readAllGames(req, res, next) {
    try {
      let games = await Game.findAll({
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
          {
            model: Favorite,
          },
        ],
        order: [["id"]],
      });

      res.status(200).json(games);
    } catch (error) {
      next(error);
    }
  }

  static async getGameById(req, res, next) {
    const { id } = req.params;
    try {
      let findGame = await Game.findByPk(+id);

      if (!findGame) {
        throw { name: "not-found" };
      }

      res.status(200).json(findGame);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GameController;

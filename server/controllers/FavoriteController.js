const { Favorite, Game, User } = require("../models");

class FavoriteController {
  static async readAllFavorites(req, res, next) {
    const { id } = req.user;
    try {
      let favorites = await Favorite.findAll({
        where: { UserId: id },
        include: {
          model: Game
        }
      });

      res.status(200).json(favorites);
    } catch (error) {
      next(error);
    }
  }

  static async createFavorite(req, res, next) {
    try {
      const { UserId = req.user.id, GameId } = req.body;
      let findFavoriteGame = await Favorite.findOne({
        where: { UserId },
        include: {
          model: Game,
          where: {
            id: GameId
          }
        }
      })
      
      if(findFavoriteGame) {
        throw { name: "existed-game" }
      }
      let favorite = await Favorite.create({ UserId, GameId });
      let newFavorite = await Favorite.findByPk(+favorite.id, {
        include: Game
      })

      res.status(201).json(newFavorite);
    } catch (error) {
      next(error);
    }
  }

  static async deleteFavoriteById(req, res, next) {
    const { id } = req.params;
    try {
      let findFavorite = await Favorite.findByPk(+id, {
        include: Game
      });

      if (!findFavorite) {
        throw { name: "not-found" };
      }
      await Favorite.destroy({
        where: { id },
      });
      
      res.status(200).json({
        message: `Success remove ${findFavorite.Game.title} from favorites`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FavoriteController;

const { Favorite } = require("../models");

class FavoriteController {
  static async readAllFavorites(req, res, next) {
    try {
      let favorites = await Favorite.findAll();

      res.status(200).json(favorites);
    } catch (error) {
      next(error);
    }
  }

  static async createFavorite(req, res, next) {
    try {
      const { UserId = req.user.id, GameId } = req.body;
      let favorite = await favorite.create({ UserId, GameId });

      res.status(201).json(favorite);
    } catch (error) {
      next(error);
    }
  }

  static async deleteFavoriteById(req, res, next) {
    const { id } = req.params;
    try {
      let findFavorite = await Favorite.findByPk(+id);

      if (!findFavorite) {
        throw { name: "not-found" };
      }
      await Favorite.destroy({
        where: { id },
      });

      res.status(200).json({
        message: `Success remove ${findFavorite.name} from favorites`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FavoriteController;

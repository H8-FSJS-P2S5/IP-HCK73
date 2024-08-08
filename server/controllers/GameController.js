const gemini = require("../helpers/geminiAI");
const { Game, User, Favorite } = require("../models");
const { Op } = require("sequelize");

class GameController {
  static async readAllGames(req, res, next) {
    try {
      const { search, sort, page } = req.query;
      const options = {
        order: [["id"]],
      };

      if (search) {
        options.where = {
          title: {
            [Op.iLike]: `%${search}%`,
          },
        };
      }

      if (sort) {
        const ordering = sort[0] === "-" ? "DESC" : "ASC";
        const columnName = ordering === "DESC" ? sort.slice(1) : sort;

        options.order = [[columnName, ordering]];
      }

      let limit = 10;
      let pageNumber = 1;
      options.limit = limit;

      if (page) {
        if (page.size) {
          limit = +page.size;
          options.limit = limit;
        } else {
          options.limit = limit;
        }

        if (page.number) {
          pageNumber = +page.number;
          options.offset = limit * (pageNumber - 1);
        }
      }
      const { count } = await Game.findAndCountAll(options);

      let games = await Game.findAll(options);

      res.status(200).json({
        page: pageNumber,
        data: games,
        totalData: count,
        totalPage: Math.ceil(count / limit),
        dataPerPage: limit,
      });
    } catch (error) {
      next(error);
    }
  }

  static async askRecommendations(req, res, next) {
    try {
      const { genre } = req.body;
      let games = await Game.findAll();
      games = games.map((el) => {
        return {
          id: el.id,
          title: el.title,
          genre: el.genre,
          imgUrl: el.imgUrl,
          metacriticRating: el.metacriticRating,
        };
      });

      let data = await gemini(genre, JSON.stringify(games));
      console.log(data, "<<<<<< data");      

      res.status(200).json(data);
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

const { Recipe } = require("../models");

class RecipeController {
  static async getAllrecipe(req, res ,next) {
    try {
      const data = await Recipe.findAll();

      res.status(200).json(data);
    } catch (error) {
    next(error)
    }
  }

  static async getRecipebyId(req, res,next) {
    try {
      const { id } = req.params;
      const data = await Recipe.findByPk(id);

      if(!data){
        throw {name :"not found"}
      }

      res.status(200).json(data);
    } catch (error) {
      next(error)
    }
  }

  static async addRecipe(req, res) {
    try {
      let new_recipe = await Recipe.create({
        ...req.body,
        UserId: req.user.id,
      });
      res.status(201).json(new_recipe);
    } catch (error) {
      console.log(error);
    }
  }

  static async editRecipe(req, res) {
    try {
      const { id } = req.params;
      const user_id = req.user.id;

      const recipe = await Recipe.findByPk(id);

      if (!recipe) {
        throw { name: "not found" };
      }

      await Product.update(req.body, {
        where: {
          id: id,
        },
      });

      let Updated_recipe = await Recipe.findByPk(id);
      res.status(200).json(Updated_recipe);
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteRecipe(req, res) {
    try {
      const { id } = req.params;
      const user_id = req.user.id;

      const recipe = await Recipe.findByPk(id);

      if (!recipe) {
        throw { name: "not found" };
      }

      if (recipe.UserId !== user_id) {
        throw { name: "Forbidden" };
      }

      await Recipe.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = RecipeController;

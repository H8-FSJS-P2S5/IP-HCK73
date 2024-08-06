const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
  static async register(req, res, next) {
    const { username, email, password } = req.body;

    try {
      const createdUser = await User.create({
        username,
        email,
        password,
      });
      res.status(201).json({
        username,
        email,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      if (!email) {
        throw { name: "required-email" };
      }
      if (!password) {
        throw { name: "required-password" };
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        throw { name: "invalid-user" };
      }

      const validPassword = comparePassword(password, user.password);
      if (!validPassword) {
        throw { name: "invalid-user" };
      }

      const accessToken = signToken({ id: user.id });
      res.status(200).json({ accessToken });
    } catch (error) {
      next(error);
    }
  }

  static async editProfile(req, res, next) {
    const { username, email, password } = req.body;

    try {
      const updatedUser = await User.update({
        username,
        email,
        password,
      });
      res.status(200).json({
        message: `Success update user profile`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;

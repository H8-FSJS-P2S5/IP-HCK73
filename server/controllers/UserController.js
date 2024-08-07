const { comparePassword, hashPassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User } = require("../models");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();

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

      const access_token = signToken({ id: user.id });
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }

  static async getUser(req, res, next) {
    const { id } = req.user;
    try {
      let findUser = await User.findByPk(+id, {
        attributes: { exclude: ["password"] },
      });

      res.status(200).json(findUser);
    } catch (error) {
      next(error);
    }
  }

  static async editProfile(req, res, next) {
    const { id } = req.user;
    const { username, email, password } = req.body;

    try {
      const updatedUser = await User.update(
        {
          username,
          email,
          password: hashPassword(password),
        },
        {
          where: { id },
        }
      );
      res.status(200).json({
        message: `Success update user profile`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async googleLogin(req, res, next) {
    const { googleToken } = req.body;
    try {
      const ticket = await client.verifyIdToken({
        idToken: googleToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const [user, created] = await User.findOrCreate({
        where: { email: payload.email },
        defaults: {
          username: payload.name,
          email: payload.email,
          picture: payload.picture,
          provider: "google",
          password: "google_id",
        },
        hooks: false,
      });

      const token = signToken({ id: user.id }, process.env.JWT_SECRET);
      res.status(created ? 201 : 200).json({ access_token: token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;

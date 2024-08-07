const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const { User } = require('../models');

class UserController {
  static async register(req, res, next) {
    const { email, password } = req.body;
    try {
      const createUser = await User.create({
        email,
        password
      });
      res.status(201).json({
        id: createUser.id,
        email: createUser.email
      });
    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        throw { name: 'invalid-input' };
      }
      let user = await User.findOne({
        where: { email }
      });

      if (!user || !comparePassword(password, user.password)) {
        throw { name: 'invalid-user' };
      }

      let token = signToken({
        id: user.id
      });

      res.status(200).json({ access_token: token });
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController;

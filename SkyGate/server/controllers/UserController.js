require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const client = new OAuth2Client();

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
    const { email, password } = req.body
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

  static async googleLogin(req, res, next) {
    const { googleToken } = req.body
    try {
      const ticket = await client.verifyIdToken({
        idToken: googleToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();  
      const [user, created] = await User.findOrCreate({
        where: { email: payload.email },
        defaults: {
          name: payload.name,
          email: payload.email,
          picture: payload.picture,
          provider: 'google',
          password: 'google_id' // placeholder
        },
        hooks: false
      });
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      res.status(created ? 201 : 200).json({ access_token: token });
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
}

module.exports = UserController;

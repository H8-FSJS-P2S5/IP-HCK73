const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

async function isAuthenticated(req, res, next) {
  try {
    let access_token = req.headers.authorization;

    if (!access_token) {
      throw { name: "invalid-token" };
    }
    let [bearer, token] = access_token.split(" ");

    if (bearer !== "Bearer") {
      throw { name: "invalid-token" };
    }

    let payload = verifyToken(token);

    let user = await User.findByPk(payload.id);

    if (!user) {
      throw { name: "invalid-token" };
    }

    req.user = {
      id: user.id,
    };

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = isAuthenticated;

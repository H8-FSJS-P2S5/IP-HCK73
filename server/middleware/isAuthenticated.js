const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

async function isAuthenticated(req, res, next) {
  try {
    let accessToken = req.headers.authorization;

    if (!accessToken) {
      throw { name: "invalid-token" };
    }
    let [bearer, token] = accessToken.split(" ");

    if (bearer !== "Bearer") {
      throw { name: "invalid-token" };
    }

    let payload = verifyToken(token);

    let user = await User.findByPk(payload.authorId);

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

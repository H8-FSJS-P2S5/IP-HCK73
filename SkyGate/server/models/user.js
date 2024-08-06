'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: 'Email must be unique'
    },
    validate: {
      notNull: {
        args: true,
        msg: 'Email required'
      },
      notEmpty: {
        args: true,
        msg: 'Email required'
      },
      isEmail: {
        args: true,
        msg: 'Wrong email format'
      }
    },
    password: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: 'Password required'
      },
      notEmpty: {
        args: true,
        msg: 'Password required'
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
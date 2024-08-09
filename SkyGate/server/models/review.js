'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User);
      Review.belongsTo(models.Airport);
    }
  }
  Review.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AirportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Rate required'
        },
        notEmpty: {
          args: true,
          msg: 'Rate required'
        }
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Comment required'
        },
        notEmpty: {
          args: true,
          msg: 'Comment required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
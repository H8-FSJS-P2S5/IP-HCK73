'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airport.init({
    airportCode: DataTypes.STRING,
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    private: DataTypes.BOOLEAN,
    iataCode: DataTypes.STRING,
    icaoCode: DataTypes.STRING,
    runway1: DataTypes.STRING,
    runway2: DataTypes.STRING,
    elevation: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};
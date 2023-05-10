'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CadastroEvento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CadastroEvento.init({
    esporte: DataTypes.STRING,
    timeA: DataTypes.STRING,
    timeB: DataTypes.STRING,
    data: DataTypes.DATE,
    hora: DataTypes.TIME,
    local: DataTypes.STRING,
    arbitragem: DataTypes.STRING,
    imprensa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CadastroEvento',
  });
  return CadastroEvento;
};
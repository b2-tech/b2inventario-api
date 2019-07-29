'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tipo = sequelize.define('Tipo', {
    nomeTipo: DataTypes.STRING
  }, {});
  Tipo.associate = function(models) {
  };
  return Tipo;
};

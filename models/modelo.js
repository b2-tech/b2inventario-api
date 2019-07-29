'use strict';
module.exports = (sequelize, DataTypes) => {
  const Modelo = sequelize.define('Modelo', {
    nomeModelo: DataTypes.STRING,
    TipoID: DataTypes.INTEGER,
    MarcaID: DataTypes.INTEGER
  }, {});
  Modelo.associate = function(models) {
  };
  return Modelo;
};

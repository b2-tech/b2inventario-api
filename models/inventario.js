'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inventario = sequelize.define('Inventario', {
    idKM: DataTypes.INTEGER,
    idSerie: DataTypes.INTEGER,
    idControle: DataTypes.INTEGER,
    usuario: DataTypes.STRING,
    idModelo: DataTypes.INTEGER,
    idLocal: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER,
    mesa: DataTypes.STRING
  }, {});
  Inventario.associate = function(models) {
    // associations can be defined here
  };
  return Inventario;
};

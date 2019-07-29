'use strict';
module.exports = (sequelize, DataTypes) => {
  const Controle = sequelize.define('Controle', {
    idEmpresa: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER,
    observacao: DataTypes.STRING,
    dataInventario: DataTypes.DATE
  }, {});
  Controle.associate = function(models) {
    Controle.hasMany(models.Inventario, {foreignKey: 'idControle', as: 'inventarios'})
  };
  return Controle;
};

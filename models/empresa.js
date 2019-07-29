'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define('Empresa', {
    nameEmpresa: DataTypes.STRING
  }, {});
  Empresa.associate = function(models) {
    Empresa.hasMany(models.Local, {foreignKey: 'LocalId', as: 'locais'})
    Empresa.hasMany(models.Controle, {foreignKey: 'idEmpresa', as: 'controles'})
  };
  return Empresa;
};

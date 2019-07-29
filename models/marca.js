'use strict';
module.exports = (sequelize, DataTypes) => {
  const Marca = sequelize.define('Marca', {
    nomeMarca: DataTypes.STRING
  }, {});
  Marca.associate = function(models) {
    Marca.hasMany(models.Modelo, {foreignKey: 'MarcaID', as: 'modelos'})
  };
  return Marca;
};

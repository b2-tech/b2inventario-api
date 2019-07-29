'use strict';
module.exports = (sequelize, DataTypes) => {
  const Local = sequelize.define('Local', {
    nomeLocal: DataTypes.STRING,
    LocalID: DataTypes.INTEGER
  }, {});
  Local.associate = function(models) {

  };
  return Local;
};

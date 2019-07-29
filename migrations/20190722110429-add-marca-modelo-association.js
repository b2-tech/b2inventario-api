'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Modelos', // name of Source model
      'MarcaId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Marcas', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Modelos', // name of Source model
      'MarcaId' // key we want to remove
    );
  }
};

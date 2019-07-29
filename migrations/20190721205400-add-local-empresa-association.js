'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Locals', // name of Source model
      'LocalId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Empresas', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Locals', // name of Source model
      'LocalId' // key we want to remove
    );
  }
};

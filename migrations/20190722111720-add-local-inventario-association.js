'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Inventarios', // name of Source model
      'idLocal', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Locals', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Inventarios', // name of Source model
      'idLocal' // key we want to remove
    );
  }
};

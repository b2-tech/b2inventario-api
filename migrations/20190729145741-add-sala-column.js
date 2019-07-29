'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Inventarios', // name of Source model
      'mesa', // name of the key we're adding
      {
        type: Sequelize.STRING,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Inventarios', // name of Source model
      'mesa' // key we want to remove
    );
  }
};

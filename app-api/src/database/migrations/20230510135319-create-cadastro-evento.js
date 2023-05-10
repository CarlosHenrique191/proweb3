'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CadastroEvento', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      esporte: {
        type: Sequelize.STRING
      },
      timeA: {
        type: Sequelize.STRING
      },
      timeB: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATE
      },
      hora: {
        type: Sequelize.TIME
      },
      local: {
        type: Sequelize.STRING
      },
      arbitragem: {
        type: Sequelize.STRING
      },
      imprensa: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CadastroEvento');
  }
};
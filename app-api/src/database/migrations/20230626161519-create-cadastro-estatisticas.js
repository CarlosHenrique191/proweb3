'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CadastroEstatisticas', {
      eventoNome: {
        type: Sequelize.STRING,
      },
      partidaNome: {
        type: Sequelize.STRING,
        references: {
          model: 'CadastroResultado',
          key: 'nome',
          as: 'partidaNome',
        }
      },
      melhorJogador: {
        type: Sequelize.STRING
      },
      quantidadePontos: {
        type: Sequelize.STRING
      },
      faltas: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CadastroEstatisticas');
  }
};
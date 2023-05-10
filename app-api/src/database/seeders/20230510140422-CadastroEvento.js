'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("CadastroEvento", [
      {
        esporte: "futebol",
        timeA: "exemploA",
        timeB: "exemploB",
        data: null,
        hora: null,
        local: "local",
        arbitragem: "exemplo",
        imprensa: "exemplo"
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CadastroEvento", null, {});
  },
};

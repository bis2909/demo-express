'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [{
      title: "Post title 1",
      description: "Post description 1",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Post title 2",
      description: "Post description 2",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      postID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'post_id',
        references: {
          model: 'blog_posts',
          key: 'id'
        }
      },
      // onUpdate: 'CASCADE',
      // onDelete: 'CASCADE',
      // primaryKey: true,
      // type: Sequelize.INTEGER,

      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      // onUpdate: 'CASCADE',
      // onDelete: 'CASCADE',
      // primaryKey: true,
      // type: Sequelize.INTEGER,

      // outras colunas necessárias
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};


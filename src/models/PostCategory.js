'use strict';

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
      },
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
    
  });

  PostCategory.associate = ({Category,BlogPost}) => {
    Category.belongsToMany(BlogPost, {
        as: 'blogPost',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
    });
    BlogPost.belongsToMany(Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
    });
  }
  return PostCategory;
};

'use strict';

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'post_id',
      allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        field: 'category_id',
        allowNull: false
      },
    
    
  }, {
    tableName: 'PostCategories',
    underscored: true,
    timestamps: false,
    
  });

  PostCategory.associate = ({Category,BlogPost}) => {
    Category.belongsToMany(BlogPost, {
        as: 'blogPost',
        through: PostCategory,
        foreignKey: 'category_id',
        otherKey: 'post_id',
    });
    BlogPost.belongsToMany(Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'post_id',
        otherKey: 'category_id',
    });
  }
  return PostCategory;
};
// PostCategory.associate = (models) => {
//   models.Category.belongsToMany(models.BlogPost,
//     {
//       as: 'posts',
//       through: PostCategory,
//       foreignKey: 'categoryId',
//       otherKey: 'postId'
//     });
//   models.BlogPost.belongsToMany(models.Category,
//     {
//       as: 'categories',
//       through: PostCategory,
//       foreignKey: 'postId',
//       otherKey: 'categoryId'
//     });
// }

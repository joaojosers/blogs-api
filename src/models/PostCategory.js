'use strict';

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategories', {
    PostId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'post_id',
      allowNull: false
    },
    CategoryId: {
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

//   PostCategory.associate = models => {
//     models.Category.belongsToMany(models.BlogPost, {
//         as: 'blogPosts',
//         through: PostCategory,
//         foreignKey: 'category_id',
//         otherKey: 'post_id',
//     });
//     models.BlogPost.belongsToMany(models.Category, {
//         as: 'categories',
//         through: PostCategory,
//         foreignKey: 'post_id',
//         otherKey: 'category_id',
//     });
//   };

  return PostCategory;
};




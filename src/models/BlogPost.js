'use strict';

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPosts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    published: {
        type: DataTypes.DATE,
    },
    updated: {
        type: DataTypes.DATE,
    },
    UserId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
    },
    
  }, {
    tableName: 'BlogPosts',
    underscored: true,
    timestamps: true,
    
  });

  BlogPost.associate = models => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  };

  return BlogPost;
};
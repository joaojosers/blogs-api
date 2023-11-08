'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  }, {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
    
  });

//   Category.associate = models => {
//     Category.belongsTo(models.BlogPost, {
//       foreignKey: 'user_id'
//     });
//   };

  return Category;
};





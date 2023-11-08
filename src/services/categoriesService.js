const { Category } = require('../models');

const addNewCategory = async (name) => {
  console.log('teste', name);
  const category = await Category.create({ name });
  return category;
};

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  addNewCategory,
  getCategories,
};
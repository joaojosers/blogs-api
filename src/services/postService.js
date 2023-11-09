const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const createPost = async (
  userId, 
  title, 
  content, 
  transaction,
) => BlogPost.create({ userId, title, content }, { transaction });

const associateCategories = async (post, categoryIds, transaction) => {
  const postCategories = categoryIds
    .map((categoryId) => ({ postId: post.dataValues.id, categoryId }));
  console.log('postCategories', postCategories);
  await PostCategory.bulkCreate(postCategories, { transaction });
};

const addPost = async (userId, title, content, categoryIds) => {
  let transaction;

  try {
    transaction = await sequelize.transaction();

    const post = await createPost(userId, title, content, transaction);
    await associateCategories(post, categoryIds, transaction);

    await transaction.commit();
    return post;
  } catch (error) {
    if (transaction) await transaction.rollback();
    throw error;
  }
};

// const listPosts = async (userId) => {
//   // Código para listar posts
// };

module.exports = {
  addPost,
  // listPosts,
};

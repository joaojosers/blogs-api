// const Sequelize = require('sequelize');
// const { Category, BlogPost, User } = require('../models');

// const config = require('../config/config');

// const env = process.env.NODE_ENV || 'development';
// const sequelize = new Sequelize(config[env]);

// const validateInputs = (userId, title, content, categoryIds) => {
//   if (!userId || !title || !content || !categoryIds) {
//     throw new Error('Some required fields are missing');
//   }
// };

// const validateCategories = async (categoryIds) => {
//   const categoriesExist = await Category.findAll({
//     where: { id: categoryIds },
//   });

//   if (categoriesExist.length !== categoryIds.length) {
//     throw new Error('One or more "categoryIds" not found');
//   }
// };

// const validateInputs = (userId, title, content, categoryIds) => {
//   try {
//     if (!userId || !title || !content || !categoryIds) {
//       throw new Error('Some required fields are missing');
//     }
//   } catch (error) {
//     throw error;
//   }
// };

// const validateCategories = async (categoryIds) => {
//   try {
//     const categoriesExist = await Category.findAll({
//       where: { id: categoryIds },
//     });

//     if (categoriesExist.length !== categoryIds.length) {
//       throw new Error('One or more "categoryIds" not found');
//     }
//   } catch (error) {
//     throw error;
//   }
// };

// const createPost = (userId, title, content, transaction) => 
//   BlogPost.create({ userId, title, content }, { transaction });

// const associateCategories = async (post, categoryIds, transaction) => {
//   await post.addCategories(categoryIds, { transaction });
// };

// const addPost = async (userId, title, content, categoryIds) => {
//   validateInputs(userId, title, content, categoryIds);

//   const transaction = await sequelize.transaction();

//   try {
//     const post = await createPost(userId, title, content, transaction);
//     await validateCategories(categoryIds);
//     await associateCategories(post, categoryIds, transaction);

//     await transaction.commit();
//     return post;
//   } catch (error) {
//     await transaction.rollback();
//     throw error;
//   }
// };

// const listPosts = async (userId) => {
//   const posts = await BlogPost.findAll({
//     include: [
//       { model: User, as: 'user', attributes: { exclude: 'password' } },
//       { model: Category, as: 'categories', through: { attributes: [] } },
//     ],
//     where: { userId },
//   });
//   return posts;
// };

// const addPost = async (userId, title, content, categoryIds) => {
//   if (!userId || !title || !content || !categoryIds) {
//     throw new Error('Some required fields are missing');
//   }

//   const transaction = await sequelize.transaction();

//   try {
//     const post = await BlogPost.create({ userId, title, content }, { transaction });
//     await post.addCategories(categoryIds, { transaction });

//     await transaction.commit();
//     return post;
//   } catch (error) {
//     await transaction.rollback();
//     throw error;
//   }
// };

// const listPostById = async (userId, id) => {
//   const post = await BlogPost.findOne({
//     include: [
//       { model: User, as: 'user', attributes: { exclude: 'password' } },
//       { model: Category, as: 'categories', through: { attributes: [] } },
//     ],
//     where: { userId, id },
//   });
//   if (!post) throw new ErrorGenerator(types.NOT_FOUND, 'Post does not exist');
//   return post;
// };

// const updatePost = async (userId, id, title, content) => {
//   const [postId] = await BlogPost.update({ title, content }, { where: { userId, id } });
//   if (postId === 0) throw new ErrorGenerator(types.UNAUTHENTICATED, 'Unauthorized user');
//   const post = await listPostById(userId, postId);
//   return post;
// };

// const deletePost = async (userId, id) => {
//   const post = await BlogPost.findOne({ where: { id } });
//   if (!post) throw new ErrorGenerator(types.NOT_FOUND, 'Post does not exist');
//   await BlogPost.destroy({ where: { userId, id } });
//   if (post.dataValues.userId !== userId) {
//     throw new ErrorGenerator(types.UNAUTHENTICATED, 'Unauthorized user');
//   }
// };

module.exports = {
//   addPost,
//   listPosts,
  // listPostById,
  // updatePost,
  // deletePost,
};

// const addPost = async (userId, title, content, categoryIds) => {
//   if (!userId || !title || !content || !categoryIds) {
//     throw new Error('Some required fields are missing');
//   }
  
//   const categoriesExist = await Category.findAll({
//     where: { id: categoryIds },
//   });
  
//   if (categoriesExist.length !== categoryIds.length) {
//     throw new Error('one or more "categoryIds" not found');
//   }
  
//   let transaction;
//   try {
//     transaction = await sequelize.transaction();
  
//     const post = await Post.create({ userId, title, content }, { transaction });
//     await post.addCategories(categoryIds, { transaction });
  
//     await transaction.commit();
//     return post;
//   } catch (error) {
//     if (transaction) await transaction.rollback();
//     throw error;
//   }
// };
// const listPosts = async (userId) => {
//   const posts = await BlogPost.findAll({
//     include: [
//       { model: User, as: 'user', attributes: { exclude: 'password' } },
//       { model: Category, as: 'categories', through: { attributes: [] } },
//     ],
//     where: { userId },
//   });
//   return posts;
// };
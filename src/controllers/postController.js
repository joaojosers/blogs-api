const postService = require('../services/postService');

const addPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = req.user.id;
    console.log('UserId', userId);
    // const { userId } = req;
    const post = await postService.addPost(userId, title, content, categoryIds);
    return res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

// const listPosts = async (req, res, next) => {
//   try {
//     const { userId } = req;
//     const posts = await postService.listPosts(userId);
//     res.status(200).json(posts);
//   } catch (error) {
//     next();
//   }
// };

// const listPostById = async (req, res, next) => {
//   try {
//     const { userId } = req;
//     const { id } = req.params;
//     const post = await postService.listPostById(userId, id);
//     res.status(200).json(post);
//   } catch (error) {
//     next(error);
//   }
// };

// const updatePost = async (req, res, next) => {
//   try {
//     const { userId } = req;
//     const { id } = req.params;
//     const { title, content } = req.body;
//     const post = await postService.updatePost(userId, id, title, content);
//     res.status(200).json(post);
//   } catch (error) {
//     next(error);
//   }
// };

// const deletePost = async (req, res, next) => {
//   try {
//     const { userId } = req;
//     const { id } = req.params;
//     await postService.deletePost(userId, id);
//     res.status(204).send();
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  addPost,
//   listPosts,
//   listPostById,
//   updatePost,
//   deletePost,
};
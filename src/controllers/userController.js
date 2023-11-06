// const User = require('../models/User');
const userService = require('../services/userService');

const addNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data } = await userService.addNewUser(displayName, email, password, image);
  const token = await userService.generateToken(data);
  return res.status(status).json({ token });
};

const getAllUsers = async (req, res) => {
  const { status, data } = await userService.getAllUsers();
  return res.status(status).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getUserById(id);
  return res.status(status).json(data);
};

// const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const { displayName, email, password, image } = req.body;
//   const { status, data } = await userService.updateUser(id, displayName, email, password, image);
//   return res.status(status).json(data);
// };

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.deleteUser(id);
  return res.status(status).json(data);
};

module.exports = {
  addNewUser,
  getAllUsers,
  getUserById,
  // updateUser,
  deleteUser,
};
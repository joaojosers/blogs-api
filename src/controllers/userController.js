// const User = require('../models/User');
const userService = require('../services/userService');

const validateDisplayName = (displayName) => {
  if (displayName.length < 8 || !displayName) {
    return { status: 400, message: '"displayName" length must be at least 8 characters long' };
  }
  return null;
};

const validatePassword = (password) => {
  if (password.length < 6 || !password) {
    return { status: 400, message: '"password" length must be at least 6 characters long' };
  }
  return null;
};

const validateEmail = (email) => {
  if (!email) {
    return { status: 400, message: '"email" is required' };
  }
  
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  
  if (!regex.test(email)) {
    return { status: 400, message: '"email" must be a valid email' };
  }

  return null;
};

// const validateEmail = (email) => (!email 
//   ? { status: 400, message: '"email" must be a valid email' } : null);

const validateInput = (displayName, email, password) => {
  const displayNameError = validateDisplayName(displayName);
  if (displayNameError) {
    return displayNameError;
  }

  const passwordError = validatePassword(password);
  if (passwordError) {
    return passwordError;
  }

  const emailError = validateEmail(email);
  if (emailError) {
    return emailError;
  }

  return null;
};

const addNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  // Verificar se o email já está cadastrado no banco de dados
  const existingUser = await userService.getUserByEmail(email);
  if (existingUser) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const inputError = validateInput(displayName, email, password);
  if (inputError) {
    return res.status(inputError.status).json({ message: inputError.message });
  }

  await userService.addNewUser(displayName, email, password, image);
  const token = await userService.generateToken(email);
  return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const { status, data } = await userService.getAllUsers();
  return res.status(status).json(data);
};

const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  const { status, data } = await userService.getUserByEmail(email);
  return res.status(status).json(data);
};
const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getUserById(id);
  return res.status(status).json(data);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { displayName, email, password, image } = req.body;
  const { status, data } = await userService.updateUser(id, displayName, email, password, image);
  return res.status(status).json(data);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.deleteUser(id);
  return res.status(status).json(data);
};

module.exports = {
  addNewUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
};

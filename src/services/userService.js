const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET_KEY = process.env.JWT_SECRET || 'secretJWT';

const generateToken = (payload) => jwt.sign(payload, SECRET_KEY);

// const executeQueryDB = async (displayName, email, password) => {
//   const user = await User.findOne({
//     where: { displayName, email, password },
//     attributes: { exclude: ['email'] },
//   });

//   // if (!user) {
//   //   return {
//     status: 400, 
//     data: { message: '"displayName" length must be at least 8 characters long' } };
// }

// if (user.dataValues.email === email) {
//   return { status: 400, data: { message: 'User already registered' } };
// }

//   const token = generateToken({ id: user.dataValues.email });

//   return { status: 200, data: { token } };
// };

const addNewUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  return user;
};
const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};
const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};
const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return user;
};

const updateUser = async (id, userData) => {
  const { displayName, email, password, image } = userData;
  const user = await User.update(
    { displayName, email, password, image },
    { where: { id } },
  );
  return user;
};

const deleteUser = async (id) => {
  const user = await User.destroy({ where: { id } });
  return user;
};

module.exports = {
  generateToken,
  addNewUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
};
// const executeQueryDB = async (displayName, email, password ) => {
//   const user = await User.findOne({
//     where: { displayName, email, password },
//     attributes: { exclude: ['email'] },
//   });
//   if (!user.displayName) return { 
//     status: 400, 
//     data: { message: '"displayName" length must be at least 8 characters long' } };
  
//   if (user.dataValues.password !== password) {
//     return { 
//       status: 400, data: { message: 'Invalid fields' } }; 
//   }

//   const { id } = user.dataValues;

//   const token = generateToken({ id });

//   return { 
//     status: 200, 
//     data: { token }, 
//   };
// };
// const executeQueryDB = async (email, password) => {
//   const user = await User.findOne({
//     where: { email },
//     attributes: { exclude: ['email'] },
//   });
//   if (!user) return { status: 400, data: { message: 'Invalid fields' } };
  
//   if (user.dataValues.password !== password) {
//     return { 
//       status: 400, data: { message: 'Invalid fields' } }; 
//   }

//   const { id } = user.dataValues;

//   const token = generateToken({ id });

//   return { 
//     status: 200, 
//     data: { token }, 
//   };
// };
// const updateUser = async (id, displayName, email, password, image) => {
//   const user = await User.update(
//     { displayName, email, password, image },
//     { where: { id } },
//   );
//   return user;
// };
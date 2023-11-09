const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET_KEY = process.env.JWT_SECRET || 'secretJWT';

const generateToken = (payload) => jwt.sign(payload, SECRET_KEY, { expiresIn: '10d' });
// const generateToken = (payload) => jwt.sign(payload, SECRET_KEY);
const executeQueryDB = async (email, password) => {
  const user = await User.findOne({
    where: { email },
    attributes: { exclude: ['email'] },
  });
  if (!user) return { status: 400, data: { message: 'Invalid fields' } };
  
  if (user.dataValues.password !== password) {
    return { 
      status: 400, data: { message: 'Invalid fields' } }; 
  }

  const { id } = user.dataValues;
  console.log('id', id);
  const token = generateToken({ id });

  return { 
    status: 200, 
    data: { token }, 
  };
};

module.exports = {
  executeQueryDB,
};
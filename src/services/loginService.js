const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET_KEY = process.env.SECRET_KEY || 'senhaSecreta';

const generateToken = (payload) => jwt.sign(payload, SECRET_KEY);

const executeQueryDB = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['email', 'password'] },
  });
  if (!user) return { status: 400, message: 'Invalid fields' };

  const { id } = user.dataValues;

  const token = generateToken({ id, password });

  return token;
  
  // return token;
};

module.exports = {
  executeQueryDB,
};
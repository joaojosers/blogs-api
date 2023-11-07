const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'secretJWT';

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = authorization.split('Bearer ')[1];
  console.log('token', token);
  try {
    const user = jwt.verify(token, SECRET_KEY);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authenticate;

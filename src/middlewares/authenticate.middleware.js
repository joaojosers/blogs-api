const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY || 'senhaSecreta';

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;
  console.log('teste authenticate', authorization);
  if (!authorization || authorization === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
 
  // if (!authorization.user) return res.status(400).json({ message: 'Invalid fields' });
  const user = jwt.verify(authorization, SECRET_KEY);

  req.user = user;
  next();
};

module.exports = authenticate;
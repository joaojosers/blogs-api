const loginService = require('../services/loginService');
// const { User } = require('../models/User');

const execute = async (req, res) => {
  // chamar o banco de dados e verificar se o usuário existe no banco de dados passando email e senha
  const { email, password } = req.body;
 
  const { status, data } = await loginService.executeQueryDB(email, password);
  
  return res.status(status).json(data);
};

module.exports = {
  execute,
};
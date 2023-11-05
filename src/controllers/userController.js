const userService = require('../services/userService');

const addNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data } = await userService.addNewUser(displayName, email, password, image);
  const token = await userService.generateToken(data);
  return res.status(status).json({ token });
};

module.exports = {
  addNewUser,
};

// const findAll = async (req, res) => {
//   const { status, data } = await userService.findAll();
//   // const users = await userService.findAll();
    
//   res.status(status).json(data);
// };
// const findById = async (req, res) => {
//   const { id } = req.params;
//   const { status, data } = await userService.findById(id);
  
//   return res.status(status).json(data);
// }; 
// const create = async (req, res) => {
//   const { displayName, email, password, image } = req.body;
//   const { status, data } = await userService.create(displayName, email, password, image);
  
//   return res.status(status).json(data);
// };
// const update = async (req, res) => {
//   const { id } = req.params;
//   const { displayName, email, password, image } = req.body;
//   const { status, data } = await userService.update(id, displayName, email, password, image);
  
//   return res.status(status).json(data);
// };
// const remove = async (req, res) => {
//   const { id } = req.params;
//   const { status, data } = await userService.remove(id);
  
//   return res.status(status).json(data);
// };
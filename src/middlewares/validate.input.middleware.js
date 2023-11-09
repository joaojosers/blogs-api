const { validateInputFields } = require('../utilities/schemaValidation');
const { Category } = require('../models');    
// const { authenticate } = require('./authenticate.middleware');
  
const inputValid = (req, res, next) => {
  const { error } = validateInputFields.validate(req.body);
  console.log('teste inputValid', error);
  
  if (error) {
    const errorMessage = error.details[0].message;
    return res.status(400).json({ message: errorMessage });
  }
  next();
};
async function categoryValid(req, res, next) {
  const { categoryIds } = req.body;
  const meuArray = [];
  for (let i = 0; i < categoryIds.length; i += 1) {
    const categoryId = categoryIds[i]; 
    const category = Category.findByPk(categoryId);
    meuArray.push(category);
  }
  if ((await Promise.all(meuArray)).includes(null)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
}
  
module.exports = { 
  inputValid,
  categoryValid,
};
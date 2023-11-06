const { validateLoginFields, 
  validatePostUser } = require('../utilities/schemaValidation');
// const { authenticate } = require('./authenticate.middleware');

const fieldsValid = (req, res, next) => {
  const { error } = validateLoginFields.validate(req.body);
  console.log('teste fieldsValid', { error });

  if (error) {
    const errorMessage = error.details[0].message;
    return res.status(400).json({ message: errorMessage });
  }
  next();
};
function postUserValid(req, res, next) {
  const { error } = validatePostUser.validate(req.body);
  console.log('teste postUserValid', { error });
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
}

module.exports = { 
  fieldsValid,
  postUserValid,
};

// const userValid = (req, res, next) => {
//   // chamar o banco de dados e verificar se o usuário existe no banco de dados passando email e senha
  
// };

// const loginFieldsError = validationResult
//   .error.details.find((detail) => detail.type === 'any.required');
  
// if (loginFieldsError) {
//   return res.status(400).json({ message: loginFieldsError.message });
// }
    
// Se houver outros erros de validação, retorne 400

// const { validateLoginEmail, validateLoginPassword } = require('../utilities/schemaValidation');

// const emailValid = (req, res, next) => {
//   const { error } = validateLoginEmail.validate(req.body);
//   console.log('teste fieldsValid', error);

//   if (error) {
//     const errorMessage = error.details[0].message;
//     return res.status(400).json({ message: errorMessage });
//   }
//   console.log('oi');  
//   return next();
// };

// const passwordlValid = (req, res, next) => {
//   const { error } = validateLoginPassword.validate(req.body);
//   console.log('teste fieldsValid', error);

//   if (error) {
//     const errorMessage = error.details[0].message;
//     return res.status(400).json({ message: errorMessage });
//   }
//   console.log('oi');  
//   return next();
// };

// module.exports = { 
//   emailValid,
//   passwordlValid,
// };

// const userValid = (req, res, next) => {
//   // chamar o banco de dados e verificar se o usuário existe no banco de dados passando email e senha
  
// };

// const loginFieldsError = validationResult
//   .error.details.find((detail) => detail.type === 'any.required');
  
// if (loginFieldsError) {
//   return res.status(400).json({ message: loginFieldsError.message });
// }
    
// Se houver outros erros de validação, retorne 400
// return res.status(400).json({ message: errorMessage });

// const { validateLoginFields } = require('../utilities/schemaValidation');

// const fieldsValid = (req, res, next) => {
//   const { body } = req;
//   console.log('teste body', body);
//   const validationResult = validateLoginFields.validate(body);
//   console.log('teste fieldsValid', validationResult);
//   console.log('teste fieldsValid', validationResult.error);

//   if (validationResult.error) {
//     const errorMessage = validationResult.error.details[0].message;
//     return res.status(400).json({ message: errorMessage });
//   }
//   console.log('oi');  
//   return next();
// };

// module.exports = { 
//   fieldsValid, 
// };
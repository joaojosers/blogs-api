const { validateLoginFields } = require('../utilities/schemaValidation');

const fieldsValid = (req, res, next) => {
  const { body } = req;
  const validationResult = validateLoginFields.validate(body);
  console.log('teste fieldsValid', validationResult.error);

  if (validationResult.error) {
    const errorMessage = validationResult.error.details[0].message;
    return res.status(400).json({ message: errorMessage });
    // const loginFieldsError = validationResult
    //   .error.details.find((detail) => detail.type === 'any.required');
  
    // if (loginFieldsError) {
    //   return res.status(400).json({ message: loginFieldsError.message });
    // }
    
    // Se houver outros erros de validação, retorne 400
    // return res.status(400).json({ message: errorMessage });
  }
  console.log('oi');  
  return next();
};

// const userValid = (req, res, next) => {
//   // chamar o banco de dados e verificar se o usuário existe no banco de dados passando email e senha
  
// };

module.exports = { 
  fieldsValid, 
};

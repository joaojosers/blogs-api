const joi = require('joi');

const validateEmail = joi.string().required().email();
const validatePassword = joi.string().required().min(6);

const validateLoginFields = joi.object({
  email: validateEmail,
  password: validatePassword,
}).messages({
  
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
  'string.min': 'Password must be at least 6 characters long', // Customize the error message for the password
  'string.email': 'Incorrect username or password',
});

module.exports = {
  validateLoginFields,
};

// const validateUser = joi.object({
//   email: validateEmail,
//   password: validatePassword,
// }).options({

//   messages: {
//     'any.required': 'Invalid fields',
//     // 'string.min': '"{{#key}}" length must be at least {{#limit}} characters long',
//   },
// });
// const joi = require('joi');

// // const validateString = joi.string().required().min(5);
// const validateEmail = joi.string().required().email();
// const validatePassword = joi.string().required().min(6);

// const validateLoginEmail = joi.object({
//   email: validateEmail,
// }).messages({
  
//   'any.required': 'Some required fields are missing',
//   'string.empty': 'Some required fields are missing',
// });

// const validateLoginPassword = joi.object({
//   password: validatePassword,
// }).messages({
  
//   'any.required': 'Some required fields are missing',
//   'string.empty': 'Some required fields are missing',
//   'string.min': 'Password must be at least 6 characters long', // Customize the error message for the password
// });

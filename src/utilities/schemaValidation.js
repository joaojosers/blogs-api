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

const displayNameValid = joi.string().required().min(8);
const emailValid = joi.string().email({ tlds: { allow: false } });
const imageValid = joi.string().uri();

const validatePostUser = joi.object({
  displayName: displayNameValid,
  email: emailValid,
  password: validatePassword,
  image: imageValid,
}).messages({
  'string.min': '"displayName" length must be at least 8 characters long',
  'any.required': 'Some required fields are missing',
});

const validateInputFields = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.array().required(),
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
  // 'string.title': '"title" is not allowed to be empty',
  // 'string.content': '"content" is not allowed to be empty',
  // 'array.categoryIds': '"categoryIds" is not allowed to be empty',
});

// const validatePostCategory = joi.object({
//   name: joi.string().required(),
// }).messages({
//   'array.categoryIds': '"categoryIds" is not allowed to be empty',
// });

module.exports = {
  validateLoginFields,
  validatePostUser,
  // validatePostCategory,
  validateInputFields,
};

// email: Joi.string().email({ tlds: { allow: false } });
// email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })

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

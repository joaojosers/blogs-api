const joi = require('joi');

const validateEmail = joi.string().required().email();
const validatePassword = joi.string().required().min(6);
const messageError = 'Some required fields are missing';

const validateLoginFields = joi.object({
  email: validateEmail,
  password: validatePassword,
}).messages({
  
  'any.required': messageError,
  'string.empty': messageError,
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
  'any.required': messageError,
});

const validateInputFields = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.array().required(),
}).messages({
  'any.required': messageError,
  'string.empty': messageError,
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

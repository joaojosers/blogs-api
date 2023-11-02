const joi = require('joi');

// const validateString = joi.string().required().min(5);
const validateEmail = joi.string().required().email();
const validatePassword = joi.string().required();

const validateLoginFields = joi.object({
  email: validateEmail,
  password: validatePassword,
}).messages({
  
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});
const validateUser = joi.object({
  email: validateEmail,
  password: validatePassword,
}).options({
  messages: {
    'any.required': '"{{#key}}" Invalid fields"',
    // 'string.min': '"{{#key}}" length must be at least {{#limit}} characters long',
  },
});

module.exports = {
  validateLoginFields,
  validateUser,
};
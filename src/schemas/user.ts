import Joi from 'joi';

export default Joi.object({
  username: Joi.string().min(2).required().messages({
    'string.min': 'Username must be longer than 2 characters',
    'string.base': 'Username must be a string',
    'any.required': 'Username is required',
  }),
  classe: Joi.string().min(2).required().messages({
    'string.min': 'classe must be longer than 2 characters',
    'string.base': 'classe must be a string',
    'any.required': 'classe is required',
  }),
  level: Joi.number().integer().min(1).required()
    .messages({
      'string.min': 'Level must be greater than 0',
      'number.base': 'Level must be a number',
      'any.required': 'Level is required',
    }),
  password: Joi.string().min(8).required().messages({
    'string.min': 'Password must be longer than 7 characters',
    'string.base': 'Password must be a string',
    'any.required': 'Password is required',
  }),
});
import Joi from 'joi';

export default Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.min': 'Username must be longer than 2 characters',
    'string.base': 'Username must be a string',
    'any.required': 'Username is required',
  }),
  password: Joi.string().min(8).required().messages({
    'string.min': 'Password must be longer than 7 characters',
    'string.base': 'Password must be a string',
    'any.required': 'Password is required',
  }),
});
import Joi from 'joi';

export default Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.min': 'Name must be longer than 2 characters',
    'string.base': 'Name must be a string',
    'any.required': 'Name is required',
  }),
  amount: Joi.string().min(3).required().messages({
    'string.min': 'Amount must be longer than 2 characters',
    'string.base': 'Amount must be a string',
    'any.required': 'Amount is required',
  }),
});
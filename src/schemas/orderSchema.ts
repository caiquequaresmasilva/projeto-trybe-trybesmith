import Joi from 'joi';

export default Joi.object({
  products: Joi.array().items(Joi.number()).min(1).required()
    .messages({
      'array.min': 'Products can\'t be empty',
      'array.base': 'Products must be an array of numbers',
      'any.required': 'Products is required',
    }),
});
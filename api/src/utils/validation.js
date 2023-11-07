const Joi = require("joi");
const dogScheme = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().uri().required(),
  height: Joi.object({
    imperial: Joi.string().required(),
    metric: Joi.string().required(),
  }).required(),
  weight: Joi.object({
    imperial: Joi.string().required(),
    metric: Joi.string().required(),
  }).required(),
  yearsOfLife: Joi.string().required(),
  origin: Joi.string().required(),
});

module.exports = dogScheme;

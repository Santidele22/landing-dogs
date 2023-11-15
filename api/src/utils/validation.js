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
/*

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim() !== '';
}

function isMetric(value) {
  return isNonEmptyString(value) && /^https?:\/\/.+/.test(value);
}

function isValidHeight(height) {
  return (
    height &&
    typeof height === 'object' &&
    isNonEmptyString(height.imperial) &&
    isNonEmptyString(height.metric)
  );
}

function isValidWeight(weight) {
  return (
    weight &&
    typeof weight === 'object' &&
    isNonEmptyString(weight.imperial) &&
    isNonEmptyString(weight.metric)
  );
}

function validateDogObject(dog) {
  return (
    dog &&
    isNonEmptyString(dog.name) &&
    isMetric(dog.image) &&
    isValidHeight(dog.height) &&
    isValidWeight(dog.weight) &&
    isNonEmptyString(dog.yearsOfLife) &&
    isNonEmptyString(dog.origin)
  );
} */
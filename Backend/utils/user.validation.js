const Joi = require("joi");

const validSchema = Joi.object().keys({
  fname: Joi.string().min(3).required(),
  lname: Joi.string().min(3).required(),
  email: Joi.string().required().email(),
  password: Joi.string().min(6),
  userrole: Joi.string(),
});

module.exports = validSchema;

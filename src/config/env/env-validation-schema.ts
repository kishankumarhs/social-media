import * as joi from 'joi';
export const envConfigValidator = joi.object({
  MONGO_DB_HOST: joi.string().default('localhost').required(),
  MONGO_DB_PASSWORD: joi.string().default('').required(),
  MONGO_DB_USER: joi.string().default('').required(),
  MONGO_DB_NAME: joi.string().default('social_media').required(),
  MONGO_DB_URL: joi.string().default('mongodb://localhost:27017/').required(),
  PORT: joi.number().min(0).max(9999).default(3000).required(),
});

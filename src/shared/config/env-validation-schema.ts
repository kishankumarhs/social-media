import * as joi from 'joi';
export const envConfigValidator = joi.object({
  MONGO_DB_HOST: joi.string().default('localhost'),
  MONGO_DB_PASSWORD: joi.string().default(''),
  MONGO_DB_USER: joi.string().default(''),
  MONGO_DB_NAME: joi.string().default('social_media'),
  MONGO_DB_URL: joi.string().default('mongodb://localhost:27017/'),
});

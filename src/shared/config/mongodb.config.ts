import { registerAs } from '@nestjs/config';

export default registerAs('mongodb', () => ({
  host: process.env.MONGO_DB_HOST,
  url: process.env.MONGO_DB_URL,
  dbName: process.env.MONGO_DB_NAME,
  password: process.env.MONGO_DB_PASSWORD,
  username: process.env.MONGO_DB_USER,
}));

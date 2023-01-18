import * as dotenv from 'dotenv';
dotenv.config();
module.exports = {
  AUTH_MONGO: process.env.AUTH_MONGO,
  JWT_SECRET: process.env.JWT_SECRET,
};

import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes';
import mongoose, { MongooseOptions } from 'mongoose';
import cors from 'cors';
import logger from 'morgan';

const app = express();

app.use(cors({ origin: 'http://localhost:3001' }));

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

const PORT = 4001;
const mongoURL = `mongodb+srv://nhansunday:${process.env.AUTH_MONGO}@cluster0.uzqlaxy.mongodb.net/thinhphat-test`;
//console.log(mongoURL);
mongoose.connect(mongoURL).then(
  () => console.log('Connected Database'),
  (err) => {
    throw err;
  },
);

app.use(logger('dev'));

app.use('/', router);

app.listen(PORT, (error) => {
  if (!error) {
    console.log('Server is Successfully Running, and App is listening on port ' + PORT);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});

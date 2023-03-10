import express from 'express';
import router from './routes';
import mongoose, { MongooseOptions } from 'mongoose';
import cors from 'cors';
import logger from 'morgan';
import compression from 'compression';
import { AUTH_MONGO } from './config';

const app = express();

app.use(cors({ origin: '*', allowedHeaders: ['Content-Type', 'Authorization'] }));

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

const PORT = 4001;
const mongoURL = `mongodb+srv://nhansunday:${AUTH_MONGO}@cluster0.uzqlaxy.mongodb.net/thinhphat-test`;
//console.log(mongoURL);
mongoose.connect(mongoURL).then(
  () => console.log('Connected Database'),
  (err) => {
    throw err;
  },
);

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false;
  }
  // fallback to standard filter function
  return compression.filter(req, res);
}
app.use(compression({ filter: shouldCompress }));

app.use(logger('dev'));

app.use('/', router);

app.listen(PORT, (error) => {
  if (!error) {
    console.log('Server is Successfully Running, and App is listening on port ' + PORT);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});

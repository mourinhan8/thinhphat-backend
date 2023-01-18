import express from 'express';
import { body, query, validationResult } from 'express-validator';
import mongoose, { Mongoose } from 'mongoose';
import JWT from 'jsonwebtoken';
import passport from 'passport';
import passportConfig from '../middlewares/passport';
import Employee from '../models/employee';
import { JWT_SECRET } from '../config';

const encodedToken = (userID) => {
  return JWT.sign(
    {
      iss: 'Ngoc Nhan',
      sub: userID,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 3),
    },
    JWT_SECRET,
  );
};

const router = express.Router();
router.post('/signup', async (req, res) => {
  const { username, password, full_name } = req.body;
  // Check if there is a user with the same user
  const foundUser = await Employee.findOne({ username });
  if (foundUser) return res.status(403).json({ error: { message: 'Email is already in use.' } });

  const newUser = new Employee({ username, password, full_name });
  // Encode a token
  const token = encodedToken(newUser._id);
  newUser.save();
  res.setHeader('Authorization', token);
  return res.status(201).json({ success: true });
});
router.post('/login', passport.authenticate('local', { session: false }), async (req, res) => {
  const token = encodedToken(req.user._id);

  res.setHeader('Authorization', token);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Expose-Headers', ', Authorization');

  return res.status(200).json({ success: true, user: { username: req.user.username, full_name: req.user.full_name } });
});

router.route('/secret').get(passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.status(200).json({ resources: true });
});

export default router;

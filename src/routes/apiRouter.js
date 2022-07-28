import express from 'express';
import { User } from '../db/models';

const router = express.Router;

router.post('/signup', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
  // const createUser = User.create({req.body, })
  // findOrCreate
});

export default router;

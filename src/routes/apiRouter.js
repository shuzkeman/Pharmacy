import express from 'express';
import { User, Medicines } from '../db/models';

const router = express.Router();

router.get('/cardmed', async (req, res) => {
  const medicines = await Medicines.findAll();
  console.log(medicines);
  res.json(medicines);
});

router.post('/signup', async (req, res) => {
  // console.log(JSON.parse(JSON.stringify(req)));
  console.log(req.body);
  res.sendStatus(200);
  const createUser = await User.create({ name: req.body.username, hashpass: req.body.password });
  // findOrCreate
});

router.post('/login', async (req, res) => {
  const loggedUser = await User.findOne({ where: { name: req.body.username } });
  if (loggedUser.hashpass === req.body.password) {
    res.json(loggedUser);
  }
});

export default router;

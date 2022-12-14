import express from 'express';
import template from '../template';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(template({ path: req.originalUrl }));
  // res.send('Hello');
});

router.get('/login', (req, res) => {
  res.send(template({ path: req.originalUrl }));
});

router.get('/signup', (req, res) => {
  res.send(template({ path: req.originalUrl }));
});

export default router;

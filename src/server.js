import express from 'express';
import morgan from 'morgan';
import indexRouter from './routes/indexRouter';

const app = express();
const PORT = 3000;

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`SERVAK RABOTAET KAK PCHELA NA PORTU ${PORT}`);
});

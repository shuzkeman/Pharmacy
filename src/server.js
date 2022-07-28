import express from 'express';
import morgan from 'morgan';
import indexRouter from './routes/indexRouter';
import apiRouter from './routes/apiRouter';

const app = express();
const PORT = 3000;

app.use('/', indexRouter);
app.use('/api', apiRouter);


app.listen(PORT, () => {
  console.log(`SERVAK RABOTAET KAK PCHELA NA PORTU ${PORT}`);
});

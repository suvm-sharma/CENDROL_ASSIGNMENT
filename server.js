const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('././router/userRouter');
require('dotenv').config('.env');
mongoose.set('strictQuery', false);

const app = express();

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, () => {
  console.log(`Database Connected Successfully!!!`);
});

app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

app.use('/user', userRoute);

const PORT = process.env.PORT || 1998;
app.listen(PORT, () => {
  console.log(`Port is running on ${PORT}...`);
});

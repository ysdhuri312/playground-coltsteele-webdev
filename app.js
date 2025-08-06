/** @format */

import express from 'express';
import path from 'node:path';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('map');
});

app.post('/', (req, res) => {
  const location = req.body.location;
  res.json({ message: location });
});

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`App listen on Port ${PORT}`);
});

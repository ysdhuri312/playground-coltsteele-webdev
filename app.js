/** @format */

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'hello' });
});

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`App listen on Port ${PORT}`);
});

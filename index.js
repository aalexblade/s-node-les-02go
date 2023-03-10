const express = require('express');
const cors = require('cors');
const uuid = require('uuid').v1;
const fs = require('fs').promises;

const app = express();

app.use(cors());

app.use((req, res, next) => {
  req.time = new Date().toLocaleString('ua-UA');

  next();
});

const port = 3000;

// CRUD - create, read, update, delete
app.get('/users', (req, res) => {
  // console.log(req);

  // res.send('<h1>Hell world!!!</h1>');
  res.status(200).json({
    user: {
      name: 'Joe',
      year: 2002,
      time: req.time,
    }
  });
});

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});

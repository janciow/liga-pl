const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({czesc: 'Marku! to ja z heroku node express :)'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
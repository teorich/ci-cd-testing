const express = require('express');
const app = express();

app.get('/users/test', (req, res) => {
  res.send({ msg: 'Testing' });
});

app.listen(5000, () => console.log('Runing on port 5000'));

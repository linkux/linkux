const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const store = require('./store')

app.use(express.static('public'))
app.use(bodyParser.json())
app.post('/createUser', (req, res) => {
  store
    .createUser({
      username: req.body.username,
      password: req.body.password
    })
    .then(() => res.sendStatus(200))
})

app.get('/', function (req, res) {
  console.log('Got request');
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + "/../templates"));
app.use(express.static(__dirname + "/../static"));
app.use(express.static(__dirname + "/.."));

# test
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../templates/index.html'));
});

app.listen(3001);

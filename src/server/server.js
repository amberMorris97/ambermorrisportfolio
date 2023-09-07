const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});

module.exports = app;
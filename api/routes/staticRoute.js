const express = require('express');
const path = require('path');

const routes = express.Router();

const pathToIndexHtml = path.join(__dirname, '../../projects/build/index.html');

routes.get('/', (req, res) => {
  res.sendFile(pathToIndexHtml);
});

module.exports = routes;

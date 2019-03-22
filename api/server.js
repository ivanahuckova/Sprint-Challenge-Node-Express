const express = require('express');
const cors = require('cors');
const path = require('path');
const actionRoutes = require('./routes/actionRoutes');
const projectRoutes = require('./routes/projectRoutes');
const server = express();

const pathToIndexHtml = path.join(__dirname, '../projects/build/index.html');
const pathToBuildFolder = path.join(__dirname, '../projects/build');

server.use(express.json());
server.use(cors());

server.use(express.static(pathToBuildFolder));
server.get('/', (req, res) => {
  res.sendFile(pathToIndexHtml);
});

server.use('/actions', actionRoutes);
server.use('/projects', projectRoutes);

module.exports = server;

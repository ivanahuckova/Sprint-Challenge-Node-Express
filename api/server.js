const express = require('express');
const cors = require('cors');
const actionRoutes = require('./routes/actionRoutes');
const projectRoutes = require('./routes/projectRoutes');
const server = express();

server.use(express.json());
server.use(cors());

server.use('/actions', actionRoutes);
server.use('/projects', projectRoutes);

module.exports = server;

const express = require('express');
const cors = require('cors');
const actionRoutes = require('./routes/actionRoutes');

const server = express();

server.use(express.json());
// server.use(cors());

server.use('/actions', actionRoutes);

module.exports = server;

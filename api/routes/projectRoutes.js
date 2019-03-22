const express = require('express');
const projectDb = require('../../data/helpers/projectModel');

const routes = express.Router();

// res.status(500).json({ error: 'Internal server error' });

// =============== GET ROUTES =============== //

routes.get('/', async (req, res) => {
  try {
    const allProjects = await projectDb.get();
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

routes.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const specificProject = await projectDb.get(id);
    res.status(200).json(specificProject);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// =============== POST ROUTES =============== //

module.exports = routes;

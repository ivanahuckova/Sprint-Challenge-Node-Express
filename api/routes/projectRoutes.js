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
/* Body needs to be in following format:
REQUIRED:
{ 
  name: string
  description : string
}
OPTIONAL:
{
  completed: boolean
}
*/

routes.post('/', async (req, res) => {
  try {
    const newProject = await projectDb.insert(req.body);
    res.status(200).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = routes;

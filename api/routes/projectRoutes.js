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

routes.get('/:id/actions', async (req, res) => {
  try {
    const { id } = req.params;
    const actionsForSpecificProject = await projectDb.getProjectActions(id);
    if (actionsForSpecificProject.length > 0) {
      res.status(200).json(actionsForSpecificProject);
    } else {
      res.status(404).json({ message: 'No actions for that project' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// =============== POST ROUTES =============== //
/* Body needs to be in following format:
REQUIRED:
{ 
  name: string,
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
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// =============== UPDATE ROUTES =============== //
/* Body needs to be in following format:
OPTIONAL:
{
  completed: boolean,
  description : string,
  name: string
}
*/

routes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await projectDb.update(id, req.body);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// =============== DELETE ROUTES =============== //

routes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await projectDb.remove(id);
    if (deletedProject) {
      res.status(200).json({ message: 'Project was deleted' });
    } else {
      res.status(400).json({ message: 'Not found project with that id' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = routes;

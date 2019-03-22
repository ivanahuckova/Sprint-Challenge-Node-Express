const express = require('express');
const actionDb = require('../../data/helpers/actionModel');

const routes = express.Router();

// =============== GET ROUTES =============== //

routes.get('/', async (req, res) => {
  try {
    const allActions = await actionDb.get();
    res.status(200).json(allActions);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

routes.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const specificAction = await actionDb.get(id);
    res.status(200).json(specificAction);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// =============== POST ROUTES =============== //
/* Body needs to be in following format:
REQUIRED:
{ 
  project_id: number
  description : string
  notes: string
}
OPTIONAL:
{
  completed: boolean
}
*/

routes.post('/', async (req, res) => {
  try {
    const newAction = await actionDb.insert(req.body);
    res.status(201).json(newAction);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// =============== UPDATE ROUTES =============== //
/* Body needs to be in following format:
OPTIONAL:
{
  completed: boolean,
  project_id: number
  description : string
  notes: string
}
*/

routes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAction = await actionDb.update(id, req.body);
    if (updatedAction) {
      res.status(200).json(updatedAction);
    } else {
      res.status(400).json({ message: `Action with id ${id} does not exist` });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// =============== DELETE ROUTES =============== //

routes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAction = await actionDb.remove(id);
    if (deletedAction) {
      res.status(200).json({ message: 'Action deleted' });
    } else {
      res.status(404).json({ message: 'Not found action with that id' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = routes;

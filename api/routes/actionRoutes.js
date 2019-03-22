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
    if (specificAction) {
      res.status(200).json(specificAction);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// =============== POST ROUTES =============== //

routes.post('/', async (req, res) => {
  try {
    const newAction = await actionDb.insert(req.body);
    if (newAction) {
      res.status(200).json(newAction);
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
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = routes;

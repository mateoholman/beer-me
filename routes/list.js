const express = require('express');
const ListsController = require('../controllers/ListsController');

const router = express.Router();

// Get all Lists
router.get('/', ListsController.list);

// Create a new List
router.post('/', ListsController.create);

// Show a single List
router.get('/:id', ListsController.show);

// Edit a list
router.put('/:id', ListsController.update);

// Delete a single List
router.delete('/:id', ListsController.remove);

module.exports = router;

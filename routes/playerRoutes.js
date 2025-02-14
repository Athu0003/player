const express = require('express');
const router = express.Router();
const createPlayer = require('../controllers/createPlayer');
const readPlayers = require('../controllers/readPlayer');
const updatePlayer = require('../controllers/updatePlayer');
const deletePlayer = require('../controllers/deletePlayer');

// Routes
router.post('/', createPlayer);
router.get('/', readPlayers);
router.put('/:id', updatePlayer);
router.delete('/:id', deletePlayer);

module.exports = router;

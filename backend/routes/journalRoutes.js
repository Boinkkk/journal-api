const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journalController');

router.get('/', journalController.getAllJournals);
router.get('/:id', journalController.getJournalById);

module.exports = router;
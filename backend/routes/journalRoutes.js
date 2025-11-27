const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journalController');

router.get('/', journalController.getAllJournals);
router.get('/:id', journalController.getJournalById);
router.post('/post', journalController.postJournal);
router.delete('/delete/:id', journalController.deleteJournal);
router.put('/edit/:id', journalController.editJournal);

module.exports = router;
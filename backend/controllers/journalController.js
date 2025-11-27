const Journal = require('../models/journalModel');

exports.getAllJournals = (req, res) => {
  Journal.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });

    res.json(results);
  });
};

exports.getJournalById = (req, res) => {
  const id = req.params.id;

  Journal.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });

    if (results.length === 0)
      return res.status(404).json({ message: "Journal not found" });

    res.json(results[0]);
  });
};

exports.postJournal = (req, res) => {
  const journalData = req.body;
  Journal.postJournal(journalData, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Journal created", journalId: results.insertId });
  });
}

exports.deleteJournal = (req, res) => {
  const id = req.params.id;

  Journal.DeleteJournal(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Journal deleted" });
  });
};

exports.editJournal = (req, res) => {
  const id = req.params.id;
  const journalData = req.body;
  Journal.editJournal(id, journalData, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Journal updated" });
  });
}
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

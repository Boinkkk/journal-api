const db = require('../config/db');

module.exports = {
  getAll: (callback) => {
    db.query("select id,title,authors,publication_year,sinta_level,summary_text,pdf_url FROM journals j, summaries s where j.id = s.journal_id", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM journals WHERE id = ?", [id], callback);
  }
};

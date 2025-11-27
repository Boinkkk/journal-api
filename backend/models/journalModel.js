const db = require('../config/db');

module.exports = {
  getAll: (callback) => {
    db.query("select id,title,authors,publication_year,sinta_level,summary_text,pdf_url FROM journals j, summaries s where j.id = s.journal_id", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM journals WHERE id = ?", [id], callback);
  },
  postJournal: (data, callback) => {
    const { title, authors, publication_year, sinta_level, pdf_url } = data;
    db.query(
      "INSERT INTO journals (title, authors, publication_year, sinta_level, pdf_url) VALUES (?, ?, ?, ?, ?)",
      [title, authors, publication_year, sinta_level, pdf_url],
      callback
    );
  },
  DeleteJournal: (id, callback) => {
    db.query("DELETE FROM journals WHERE id = ?", [id], callback);
  },
  editJournal: (id, data, callback) => {
    const { title, authors, publication_year, sinta_level, pdf_url } = data;
    db.query(
      "UPDATE journals SET title = ?, authors = ?, publication_year = ?, sinta_level = ?, pdf_url = ? WHERE id = ?",
      [title, authors, publication_year, sinta_level, pdf_url, id],
      callback
    );  
  }
};

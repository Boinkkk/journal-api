const db = require('../config/db');

db.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Gagal terhubung ke database:', err.message);
  } else {
    console.log('✅ Berhasil terhubung ke database!');
    connection.release();
  }

  process.exit(); // Agar proses Node keluar
});
const express = require('express');
const cors = require('cors');
const summarizeRoutes = require('../backend/routes/summarizeRoutes');
const app = express();
const port = 3000;

// Middleware JSON
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Import routes
const journalRoutes = require('../backend/routes/journalRoutes');

// Gunakan routes
app.use('/api/journals', journalRoutes);
app.use('/api/summarize', summarizeRoutes);

// Jalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
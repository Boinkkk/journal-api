const express = require("express");
const multer = require("multer");
const { summarizePDF } = require("../controllers/summarizeController");

const router = express.Router();

// Konfigurasi multer
const upload = multer({ dest: "uploads/" });

// Route upload PDF → summarize
router.post("/pdf", upload.single("pdf"), summarizePDF);

module.exports = router;
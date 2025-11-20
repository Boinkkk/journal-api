const fs = require('fs');

const pdfModule = require('pdf-parse');
const pdf = typeof pdfModule === 'function' ? pdfModule : (pdfModule.default || pdfModule);

if (typeof pdf !== 'function') {
  throw new Error('pdf-parse export tidak ditemukan sebagai fungsi. Versi/module format tidak sesuai.');
}

async function extractTextFromPDF(filePath) {
    const fileBuffer = fs.readFileSync(filePath);
    const data = await pdf(fileBuffer);
    return data && data.text ? data.text : '';
}

module.exports = { extractTextFromPDF };
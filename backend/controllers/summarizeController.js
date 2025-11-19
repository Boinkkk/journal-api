import { extractTextFromPDF } from "../services/pdfService.js";
import { summarizeText } from "../services/summarizeService.js";

export async function summarizePDF(req, res) {
    try {
        const filePath = req.file.path;

        console.log("📄 Mengekstrak teks dari PDF...");
        const extractedText = await extractTextFromPDF(filePath);

        console.log("🧠 Menghasilkan ringkasan...");
        const summary = await summarizeText(extractedText);

        return res.json({
            success: true,
            summary,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message || "Terjadi kesalahan",
        });
    }
}

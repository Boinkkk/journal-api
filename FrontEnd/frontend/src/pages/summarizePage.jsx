import { useState } from "react";
import api from "../api/client";

export default function SummarizePage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSummary("");
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Silakan pilih file PDF terlebih dahulu.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      setLoading(true);
      setError("");
      setSummary("");

      const res = await api.post("/summarize/pdf", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSummary(res.data.summary);
    } catch (err) {
      setError("Gagal memproses PDF. Pastikan backend berjalan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Ringkas Jurnal PDF</h1>

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
        <label className="block mb-2 font-medium">Upload File PDF</label>

        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="mb-4"
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
        >
          {loading ? "Memproses..." : "Unggah & Ringkas PDF"}
        </button>

        {error && (
          <p className="mt-4 text-red-600 font-semibold">{error}</p>
        )}
      </div>

      {/* Summary Output */}
      {summary && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg max-w-3xl w-full">
          <h2 className="text-2xl font-bold mb-4">Hasil Ringkasan</h2>
          <p className="whitespace-pre-line leading-relaxed">{summary}</p>
        </div>
      )}
    </div>
  );
}

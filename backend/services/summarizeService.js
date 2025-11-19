import axios from "axios";

export async function summarizeText(text) {
    const url = "http://localhost:11434/api/generate";

    const prompt = `
Ringkas jurnal berikut dalam format akademis:

${text}

Ringkasan harus mencakup:
- Tujuan penelitian
- Metode
- Dataset / Objek penelitian
- Hasil utama
- Kesimpulan
- Kontribusi penelitian
    `;

    const payload = {
        model: "qwen2.5:latest",
        prompt,
        stream: false
    };

    const response = await axios.post(url, payload);
    return response.data.response;
}

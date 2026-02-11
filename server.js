const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

app.post("/gerar", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA8mR7blM-1IeTtrS_EyZu01GlHLDp182M",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro na IA" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

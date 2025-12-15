const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("AI Backend is running 🚀");
});

// Chat API (Gemini placeholder)
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: "Message is required" });
  }

  // For now we return dummy response
  res.json({
    reply: "Hello! Backend is working. Gemini will be connected next."
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const { nanoid } = require("nanoid");

const app = express();
app.use(cors());
app.use(express.json());

const urlDatabase = {}; // Temporary in-memory storage

// Route to shorten URL
app.post("/shorten", (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) return res.status(400).json({ error: "URL is required" });

  const shortId = nanoid(6);
  urlDatabase[shortId] = longUrl;
  const shortUrl = `https://linktrim-bz7z.onrender.com/${shortId}`;

  res.json({ shortUrl });
});

// Route to handle redirection
app.get("/:shortId", (req, res) => {
  const { shortId } = req.params;
  const longUrl = urlDatabase[shortId];

  if (longUrl) {
    res.redirect(longUrl); // Redirects to the original URL
  } else {
    res.status(404).json({ error: "Short URL not found" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

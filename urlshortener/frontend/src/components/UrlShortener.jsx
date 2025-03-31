import React, { useState } from "react";
import axios from "axios";

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    if (!longUrl.trim()) {
      alert("Please enter a URL!");
      return;
    }

    try {
      const response = await axios.post("https://linktrim-bz7z.onrender.com/shorten", {
        longUrl,
      });

      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error("Error shortening URL:", error);
      alert("Failed to shorten URL.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <button onClick={handleShorten}>Shorten</button>

      {shortUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
          <button onClick={() => navigator.clipboard.writeText(shortUrl)}>
            Copy
          </button>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;

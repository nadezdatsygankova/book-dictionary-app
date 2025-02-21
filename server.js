
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
require("dotenv").config();
const engine = require("ejs-mate");

app.engine("ejs", engine);
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Google Books API
const API_KEY = process.env.GOOGLE_API_KEY;

app.get('/books', async (req, res) => {
  const query = req.query.q || "harry potter";
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_API_KEY}`;

  try {
    const response = await axios.get(url);
    res.render("books", {
      books: response.data.items || [],
      query,
      error: ""  
    });
  } catch (error) {
    console.error("Error fetching book data:", error.response?.data || error.message);
    res.render("books", {
      books: [],
      query,
      error: "Error fetching book data: " + (error.response?.data.error?.message || error.message)
    });
  }
});

// Dictionary API Route
app.get("/dictionary", async (req, res) => {
  const word = req.query.word || "example";
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    const response = await axios.get(url);

    // ✅ Check if the response contains data to prevent errors
    if (!response.data || response.data.length === 0) {
      throw new Error("No definition found");
    }

    res.render("dictionary", {
      wordData: response.data[0],
      word,
      error: ""
    });

  } catch (error) {
    console.error("Error fetching dictionary data:", error.response?.data || error.message);

    res.render("dictionary", {
      wordData: null,
      word,
      error: "Word not found. Please try a different word."  // ✅ Always provide an error message
    });
  }
});

// Home Route
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
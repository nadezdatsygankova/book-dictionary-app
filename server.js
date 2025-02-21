
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//Google Books API
app.get('/books', async (req, res) => {
  const query = req.query.q || "harry potter";
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
  try{
    const response = await axios.get(url);
    res.render("books", { books: response.data.items || [], query });
  } catch (error) {
    console.error(error);
    res.render("books", { books: [], query, error: "Error fetching book data" });
  }
});

// 📖 Dictionary API Route
app.get("/dictionary", async (req, res) => {
  const word = req.query.word || "example";
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
      const response = await axios.get(url);
      res.render("dictionary", { wordData: response.data[0], word });
  } catch (error) {
      res.render("dictionary", { wordData: null, word, error: "Word not found" });
  }
});

// 🏠 Home Route
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
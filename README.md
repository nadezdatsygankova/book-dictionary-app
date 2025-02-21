
# 📖 Book & Dictionary App

This is a simple **Book & Dictionary Search App** built with **Node.js, Express, EJS**, and **Bootstrap**.
It allows users to search for books using the **Google Books API** and look up word definitions using the **Free Dictionary API**.

---

## 🚀 Features

- 📚 **Search for Books** using the Google Books API.
- 📖 **Look up Word Definitions** using the Free Dictionary API.
- 🎨 **Responsive Design** with Bootstrap.
- ⚡ **EJS Layouts** for reusable templates.
- ✅ **Error Handling** to ensure smooth functionality.

---

## 📂 Project Structure

book-dictionary-app/
│── public/              # Static files (CSS, images)
│── views/               # EJS templates
│   ├── layout.ejs       # Main layout file
│   ├── index.ejs        # Home page
│   ├── books.ejs        # Books search results
│   ├── dictionary.ejs   # Dictionary search results
│── .env                 # Environment variables (Google API Key)
│── server.js            # Main Express server
│── package.json         # Dependencies & scripts
│── README.md            # Project documentation

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/book-dictionary-app.git
cd book-dictionary-app
```
2️⃣ Install Dependencies
```
npm install
```
3️⃣ Set Up .env File
Create a .env file in the root directory and add your Google API Key:
```
GOOGLE_API_KEY=your_google_api_key_here
```
4️⃣ Run the Server
```
node server.js
```
or (for auto-restart during development)
```
npm install -g nodemon
nodemon server.js
```
5️⃣ Open in Browser
	•	Home Page: http://localhost:3000/
	•	Book Search: http://localhost:3000/books?q=harry
	•	Dictionary Search: http://localhost:3000/dictionary?word=example

🔧 Technologies Used
	•	Node.js & Express.js - Backend framework
	•	EJS & ejs-mate - Templating engine with layout support
	•	Axios - HTTP requests for API data
	•	Google Books API - Fetch book data
	•	Free Dictionary API - Fetch word definitions
	•	Bootstrap - UI design & responsiveness

📌 API References

🔹 Google Books API
	•	Base URL: https://www.googleapis.com/books/v1/volumes?q={query}&key=API_KEY
	•	API Documentation

🔹 Free Dictionary API
	•	Base URL: https://api.dictionaryapi.dev/api/v2/entries/en/{word}
	•	API Documentation

🐞 Troubleshooting

1️⃣ “API key not valid” Error
	•	Ensure your Google API Key is correct in .env.
	•	Enable Google Books API in the Google Cloud Console.

2️⃣ “Cannot GET /books” Error
	•	Make sure server.js is running (node server.js).
	•	Check that the EJS files are in the views/ folder.

3️⃣ Layout Not Working (EJS-Mate Issue)
	•	Ensure ejs-mate is installed:
```
npm install ejs-mate
```
	•	Restart the server.
❤️ Acknowledgements
	•	Google Books API
	•	Free Dictionary API
	•	Bootstrap
  


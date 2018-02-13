
const express = require("express");
const bodyParser = require("body-parser");

var mongoose = require("mongoose");

// Connect to Mongoose
mongoose.connect("mongodb://localhost:23100/bookstore");
var db = mongoose.connection;

const app = express();

Genre = require("./models/genre");
Book = require("./models/book");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Please use /api/books or /api/genre")
});

// Get all genres
app.get("/api/genres", (req, res) => {
    Genre.getGenres((err, genres) => {
        if(err) {
            throw err;
        }
        res.json(genres);
    });
});

// Get a single genre
app.get("/api/genre/:_id", (req, res) => {
    Genre.getGenreById(req.params._id, (err, genre) => {
        if(err) {
            throw err;
        }
        res.json(genre);
    })
});

// Add a genre
app.post("/api/genres", (req, res) => {
    var genre = req.body;
    Genre.addGenre(genre, (err, genre) => {
        if(err) {
            throw err;
        }
        res.json(genre);
    });
});

// Update a genre
app.put("/api/genres/:_id", (req, res) => {
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, (err, genre) => {
        if(err) {
            throw err;
        }
        res.json(genre);
    });
});

// Remove genre
app.delete("/api/genres/:_id", (req, res) => {
    var id = req.params._id;
    Genre.removeGenre(id, (err, genre) => {
        if(err) {
            throw err;
        }
        res.json(genre);
    });
});

// Get all books
app.get("/api/books", (req, res) => {
    Book.getBooks((err, books) => {
        if(err) {
            throw err;
        }
        res.json(books);
    });
});

// Get a single book
app.get("/api/book/:_id", (req, res) => {
    Book.getBookById(req.params._id, (err, book) => {
        if(err) {
            throw err;
        }
        res.json(book);
    });
});

// Add a new book
app.post("/api/books", (req, res) => {
    var book = req.body;
    Book.addBook(book, (err, book) => {
        if(err) {
            throw err;
        }
        res.json(book);
    });
});

// Update a book with all values
app.put("/api/books/:_id", (req, res) => {
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id, book, {}, (err, book) => {
        if(err) {
            throw err;
        }
        res.json(book);
    });
});

// Remove book
app.delete("/api/books/:_id", (req, res) => {
    var id = req.params._id;
    Book.removeBook(id, (err, book) => {
        if(err) {
            throw err;
        }
        res.json(book);
    });
});

// Set Port
const port = 3000;
app.set("port", port);

app.listen(port);
console.log("Running on port " + port);


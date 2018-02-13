
var mongoose = require("mongoose");

// Genre Schema
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
    },
    pages: {
        type: String,
    },
    image_url: {
        type: String,
    },
    buy_url: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model("Book", bookSchema);

// Get books
module.exports.getBooks = (callback, limit) => {
    Book.find(callback).limit(limit);
}

// Get a book
module.exports.getBookById = (id, callback) => {
    Book.findById(id, callback);
}

// Add book
module.exports.addBook = (book, callback) => {
    Book.create(book, callback);
}

// Update book
module.exports.updateBook = (id, book, options, callback) => {
    var query = {_id: id };
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query, update, options, callback);
}

// Delete book
module.exports.removeBook = (id, callback) => {
    var query = {_id: id};
    Book.remove(query, callback);
}

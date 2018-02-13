
var mongoose = require("mongoose");

// Genre Schema
var genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model("Genre", genreSchema);

// Get genres
module.exports.getGenres = (callback, limit) => {
    Genre.find(callback).limit(limit);
}

// Get a single genre
module.exports.getGenreById = (id, callback) => {
    Genre.findById(id, callback);
}

// Add genre
module.exports.addGenre = (genre, callback) => {
    Genre.create(genre, callback);
}

// Update genre
module.exports.updateGenre = (id, genre, options, callback) => {
    var query = {_id: id };
    var update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback);
}

// Delete genre
module.exports.removeGenre = (id, callback) => {
    var query = {_id: id};
    Genre.remove(query, callback);
}


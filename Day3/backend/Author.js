const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Author = new Schema({
    authorId: Number,
    name: String,
});

module.exports = mongoose.model('Author', Author);
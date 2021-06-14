const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: String,
    author: String,
    year: Number,
    description: String,
    hardcover: Boolean,
    price: Number
});

module.exports = mongoose.model('Book', BookSchema);

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let StudentSchema = new Schema({
    title: String,
    author: String,
    year: Number,
    description: String,
    hardcover: Boolean,
    price: Number
});

module.exports = mongoose.model('Student', StudentSchema);

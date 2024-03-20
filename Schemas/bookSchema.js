const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    category: String,
    price: Number,
    quantity: Number
})

const BookModel = mongoose.model("books", bookSchema)
module.exports = { BookModel }
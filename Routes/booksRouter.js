const express = require("express")
const { BookModel } = require("../Schemas/bookSchema")
const { authMiddleware } = require("../Config/AuthMiddleware/auth")
const bookRouter = express.Router()

bookRouter.get("/books", authMiddleware, async (req, res) => {
    try {
        const query = {}
        if (req.query.category) {
            query.category = req.query.category;
        }
        if (req.query.author) {
            query.author = req.query.author;
        }
        console.log(query)
        const bookData = await BookModel.find(query)
        res.status(200).send({ "Books": bookData })
    }
    catch (err) {
        res.status(500).send(err)
    }
})

bookRouter.get("/books/:id", authMiddleware, async (req, res) => {
    try {
        const book = await BookModel.findById(req.params.id)
        if (book) {
            res.status(200).send({ "Book": book })
        } else {
            res.status(200).send({ "msg": "Book details not found!" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
})

bookRouter.post("/books", authMiddleware, async (req, res) => {
    try {
        const { title, author, category, price, quantity } = req.body
        const newBook = new BookModel({ title, author, category, price, quantity })
        await newBook.save();
        res.status(201).send({ "msg": "Book details added successfully!" })
    } catch (err) {
        res.status(400).send(err)
    }
})

bookRouter.put("/books/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const book = await BookModel.findByIdAndUpdate({ _id: id }, data)
        res.status(204).send({ "msg": "Book details updated!" })
    } catch (err) {
        res.status(400).send(err)
    }
})

bookRouter.patch("/books/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const book = await BookModel.findByIdAndUpdate({ _id: id }, data)
        res.status(204).send({ "msg": "Book details updated!" })
    } catch (err) {
        res.status(400).send(err)
    }
})

bookRouter.delete("/books/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params
        const book = await BookModel.findByIdAndDelete({ _id: id })
        res.status(202).send({ "msg": "Book details deleted successfully!" })
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = { bookRouter }
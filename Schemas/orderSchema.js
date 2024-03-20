const mongoose = require("mongoose")
const orderSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'books' }],
    totalAmount: Number
})

const OrderModel = mongoose.model("order", orderSchema)
module.exports = { OrderModel }
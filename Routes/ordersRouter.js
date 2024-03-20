const express = require("express")
const { OrderModel } = require("../Schemas/orderSchema")
const { authMiddleware } = require("../Config/AuthMiddleware/auth")
const { isAdmin } = require("../Config/AuthMiddleware/admin")
const orderRouter = express.Router()

orderRouter.post("/order", authMiddleware, async (req, res) => {
    try {
        const user = req.user
        const { books, totalAmount } = req.body
        const order = new OrderModel({ user: user._id, books, totalAmount })
        await order.save();
        res.status(201).send({ "msg": "Order placed succesfully!" })
    } catch (err) {
        res.status(500).send(err)
    }
})



orderRouter.get("/orders", authMiddleware, isAdmin, async (req, res) => {
    try {
        const orders = await OrderModel.find().populate('user books')
        res.status(200).send(orders)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = { orderRouter }
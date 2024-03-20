const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { UserModel } = require("../Schemas/userSchema")

const userRouter = express.Router()

userRouter.post("/register", async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body
        const hash = bcrypt.hashSync(password, 3);
        const newUser = new UserModel({ name, email, password: hash, isAdmin })
        await newUser.save();
        res.status(201).send({ "msg": "user Registered successfully!" })
    }
    catch (err) {
        res.status(400).send(err)
    }
})

userRouter.post("/login", async (req, res) => {
    try {
        const { email, password, } = req.body
        const user = await UserModel.findOne({ email })
        if (user) {
            const token = jwt.sign({
                userId: user._id
            }, 'heena');
            const newUser = new UserModel({ email, password })
            res.status(201).send({ "msg": "Logged in successfully!", token })
        } else {
            res.status(200).send({ "msg": "user doesn't exist!" })
        }
    }
    catch (err) {
        res.status(400).send(err)
    }
})

module.exports = { userRouter }
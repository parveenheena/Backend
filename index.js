const express = require("express");
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/userRouter");
const { bookRouter } = require("./Routes/booksRouter");
const { orderRouter } = require("./Routes/ordersRouter");
// require("dotenv").config()

const app = express();

app.use(express.json())

app.use("/", userRouter)
app.use("/", bookRouter)
app.use("/", orderRouter)


app.listen(process.env.PORT, async () => {
    await connection
    console.log(`server is running at port : http://localhost:${process.env.PORT}`)
})
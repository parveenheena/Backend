const jwt = require("jsonwebtoken");
const { UserModel } = require("../../Schemas/userSchema");

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        res.status(401).send({ "msg": "Unauthorized access!" })
    }
    jwt.verify(token, 'heena', async function (err, decoded) {
        if (err) {
            res.status(401).send(err)
        } else {
            const user = await UserModel.findOne({_id:decoded.userId})
            req.user = user
            next();
        }
    });
}

module.exports = { authMiddleware }
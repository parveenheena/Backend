const isAdmin = (req,res,next) =>{
    try{
        const user = req.user
        if(user.isAdmin) {
            next();
        }else{
            res.status(400).send({"msg":"Unauthorized access!"})
        }
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports = {isAdmin}
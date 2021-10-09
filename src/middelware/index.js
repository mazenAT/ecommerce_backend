const jwt = require('jsonwebtoken');

exports.requireSignin = (req, res, next)=>{
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user =  jwt.verify(token,process.env.SECRET);
        req.user = user;
    }else{
        return res.status(400).json({message: 'Authorization needed'});
    }
    next();
}

exports.isAdmin = (req,res,next)=>{
    if (req.user.role!=='admin') {
        res.status(400).json({message:'admin only can access'});
    }
    next();
}
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.header('authorization-token');
    if(!token){
       return res.status(401).send('Invalid Token');
    }

    try{
        const validateToken = jwt.verify(token, process.env.PRIVATE_TOKEN);
        req.user = validateToken
        next()
    }catch(error){
        res.status(401).send('Invalid Token');
    }

}
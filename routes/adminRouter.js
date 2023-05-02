const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', authController, (req, res) => {

    if(req.user.admin){
        res.send('Welcome Admin !')
    }else{
        res.status(401).send('Access denied you are not admin')
    }
    
})

module.exports = router
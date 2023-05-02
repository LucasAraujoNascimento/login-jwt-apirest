const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const UserController = {
    register: async (req, res) => {

        const userSelected = await User.findOne({email: req.body.email})
        if(userSelected){
          return res.status(400).send('Email already exists in our database, use another');
        }

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
        })

        try {
            const newUser = await user.save()
            res.send(newUser)
        } catch (error) {
            res.status(400).send(error);
        }
    },

    login: async (req, res) => {

        const userSelected = await User.findOne({email: req.body.email});
        if(!userSelected){
           return res.status(404).send('Email Not Found');
        }

        const passwordMatch = bcrypt.compareSync(req.body.password, userSelected.password)
        if(!passwordMatch){
            return res.status(404).send("Password Doesn't Match");
        }

        const token = jwt.sign({_id:userSelected._id, admin:userSelected.admin}, process.env.PRIVATE_TOKEN);
        res.header('authorization-token', token)

        res.send('User logged in')
    }
}

module.exports = UserController
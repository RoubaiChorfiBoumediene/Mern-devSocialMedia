const express = require('express');
const router = express.Router();
const {check, validationResult}=require('express-validator');
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
//@route  Post api/users
//@desc   USER REGISTRATION  
//@acces  Public
router.post('/',[
       check('name','name is not correct or empty')
       .not()
       .isEmpty(),
       check('email','please include a valide email').isEmail(),
        //space are importent 
       check('password','please enter a password with 6  or more caracters').isLength({ min:6 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()});
        };
       

        const{name , email , password }=req.body;

        User.findOne
        try {
            //user exist 
            let user = await User.findOne({email});
            if(user){
               return  res.status(400).json({errors:[{msg:'user already exist'}]});
            }
    
            //Get user avatar
            const avatar = gravatar.url(email,{
                s:'200',
                r:'pg',
                d:'mm'
            })
            user = new User({
                name ,
                email ,
                avatar,
                password
            }) 

            //Encrypt password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password,salt);
            await user.save();
            //Return  json web token 
            res.send('user registered ')
    
        } catch (err) {   
            console.log(err.message),
            res.status(500).send('server error ')
        }
 })


module.exports = router

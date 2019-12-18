const express = require('express')
const router = express.Router()
const {check, validationResult}=require('express-validator')

//@route  Post api/users
//@desc   USER REGISTRATION  
//@acces  Public
router.post('/',[
       check('name','name is not correct or empty')
       .not()
       .isEmpty(),
       check('email','please include a valide email').isEmail(),

       check('password','please enter a password with 6  or more caracters').isLength({ min:6 })
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()});
        };
   
    res.send('api users running ')
 })


module.exports = router
const express = require('express')
const router = express.Router()

//@route  GET api/profiles
//@desc   Test route 
//@acces  Public
router.get('/', (req, res) => {
    res.send('api profiles running ')
 })


module.exports = router

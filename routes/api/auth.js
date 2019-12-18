const express = require('express')
const router = express.Router()


//@route  GET api/auth
//@desc   Test route 
//@acces  Public
router.get('/', (req, res) => {
    res.send('api users auth ')
 })


module.exports = router

const mongoose = require('mongoose');

const schemaUser = new mongoose.Schema({
name :{
    type:String,
    require:true
},
email :{
    type:String,
    require:true,
    unique:true
},
password :{
    type:String,
    require:true
},
avatar :{
    type:String
},
date:{
    type:date,
    default:Date.now
}
});

module.exports = user =mongoose.model('user',schemaUser);
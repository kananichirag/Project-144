const mongoose = require("mongoose");

const con1schema = new mongoose.Schema({
    state:{
        type:String
    },
    city:{
        type:String
    },
    mobilenumber:{
        type:Number
    }
},{
    timestamps:true
})

const con1Model = new mongoose.model('contect 1',con1schema)
module.exports = con1Model;
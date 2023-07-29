const mongoose = require("mongoose");

const joischema = new mongoose.Schema({
    destination:{
        type:String
    },
    totalmember:{
        type:Number
    },
    budget:{
        type:Number
    },
    vehicle:{
        type:String
    }
},{timestamps:true})


const joinModel = new mongoose.model("details",joischema)
module.exports = joinModel;
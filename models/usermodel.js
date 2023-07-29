const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    }

},{
    timestamps:true
})

const UserModel = new mongoose.model('user',userschema);
module.exports = UserModel;
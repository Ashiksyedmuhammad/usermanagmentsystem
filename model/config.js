const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type:String,
    },
    Age:{
        type:Number,
    },
    Place:{
        type:String,
    },
    Mobile:{
        type:Number,
    },
    Email:{
        type:String,
    },
    Password:{
        type:String,
    },
    isAdmin:{
        type:Number,
    }
});

const user = mongoose.Model('users',userSchema);
module.exports = user;
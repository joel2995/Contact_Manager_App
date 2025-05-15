const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String , 
        required : [true , "PLease add the username"],

    }, 
    email : {
        type : String , 
        required : [true , "PLease add the user email"],
        unique : [true, "Email address already taken"],
    },
    password : {
        type : String , 
        required : [true , "PLease add the user password"],
    },
}, 
{
    timestamp : true , 
},

);


module.exports = mongoose.model("User" , userSchema);
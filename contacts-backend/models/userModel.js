const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String , 
        required : [true , "PLease add the username"],

    }, 
    email : {
        type : String , 
        required : [true , "PLease add the user email"],
        
    }
})
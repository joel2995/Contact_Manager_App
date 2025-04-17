const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name : {
        type: String , 
        required : [true  , "Please add the contact name"],
    },
    email : {
        type : String ,
        required : [true , "Please add the email id"],
    },
    phone : {
        type : String , 
        required : [true , "Please add the mobile number"],
    },
} , {
    timestamps : true,
});


module.exports = mongoose.model("Contact" , contactSchema);
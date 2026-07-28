const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    Username :{
        type : String,
        required : true
    },
        Email :{
        type : String,
        required : true,
        unique : true
    },
        Password :{
        type : String,
        required : true
    }
},{
  },{
    timestamps: true
})


module.exports = mongoose.model("form",formSchema)
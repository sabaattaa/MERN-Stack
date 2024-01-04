

const {Schema, default: mongoose} = require("mongoose")

const userScheema=new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
})
module.exports=mongoose.model("user",userScheema);
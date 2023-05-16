const mongoose =require("mongoose")

const AuthSchema=new mongoose.Schema({
    username:{
        type:String, 
        required:true,
        trim:true
    },
    email:{
        type:String, 
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String, 
        required:true,
        trim:true
    },
    createdDate:{
        type:Date, 
        default:new Date()
    },
})


module.exports=mongoose.model("users",AuthSchema)
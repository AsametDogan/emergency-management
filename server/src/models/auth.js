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
    phone:{
        type:String, 
        required:true,
        trim:true
    },
    adress:{
        type:String, 
        required:true,
        trim:true
    },
    contactName:{
        type:String, 
        required:true,
        trim:true
    },
    contactPhone:{
        type:String, 
        required:true,
        trim:true
    },
    img_url:{
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
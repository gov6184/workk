let mong=require("mongoose")
let Usermod=mong.model("User",mong.Schema({
    "userName":{type:String,required:true},
    "lastName":{type:String,required:true},
    "email":{type:String,required:true},
    "Contact":{type:Number,required:true},
    "Password":{type:String,required:true}
}))
module.exports={
    Usermod
    
}
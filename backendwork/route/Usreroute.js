let exp=require("express")
let Userrout=exp.Router()
let {Usermod}=require("../modal/Usermodal")
Userrout.get("/users",(req,res)=>{
        res.send("hi")
})
Userrout.post("/users/post",async(req,res)=>{
    let val= await Usermod.findOne({"email":req.body.email})
    console.log(val)
    if(val){
        res.send("user present")
    }else{
        let newuser=new Usermod(req.body)
    await newuser.save()
    res.send("newuser added successfully")
    }
    
})
Userrout.post("/users/check",async(req,res)=>{
    let aa=await Usermod.findOne({"email":req.body.email})
    if(aa){
        console.log("user present")
    }else{
        res.send("user not found")

    }
    let val =await Usermod.findOne({"email":req.body.email,"Password":req.body.password})
    console.log(val,req.body.password)
    if(val){
        let aaaa=await Usermod.findOne({"email":req.body.email,"Password":req.body.password})
        res.send({status:`authenticated successfully`,value:aaaa})
    }else{

        res.send("not authenticated")
    }
})
module.exports={

    Userrout

}
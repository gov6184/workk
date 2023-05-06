let exp=require("express")
let proute=exp.Router()
let {pmm}=require("../modal/Productmodal")
proute.post("/product/add",async(req,res)=>{
    let another=await pmm.findOne({"UserId":req.body.UserId})
    console.log(another)
    // if(another){
    //     let vall = await pmm.findOneAndUpdate({"productId":req.body.productId}, {"QTY":req.body.QTY+another.QTY}, {
    //         new: true,
    //         upsert: true,
    //         rawResult: true 
    //       });
    //       res.send("updated successfully")
    // }else{
        await pmm.updateOne({UserId:req.body.UserId},{$push:{"PRODUCTS":{"productId":req.body.productId,"QTY":req.body.QTY}}})
        
        res.send("new product added successfully")
    
   
})
module.exports={
    proute
}
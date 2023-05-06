let mon=require("mongoose")
let pmm=mon.model("Product",mon.Schema({
    "UserId":{ type:String},
    "PRODUCTS ":[
        {
            "productId":String,
            "QTY":Number,
        }
    ]
    
    }
    
   
))
module.exports={
    pmm
}

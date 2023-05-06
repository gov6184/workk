let exp=require("express")
let app=exp()
app.use(exp.json())
let {connect}=require("./config/db")
let cors=require('cors')
let {Userrout}=require("./route/Usreroute")
let {proute}=require("./route/routemodal")
app.use(cors())
app.use(Userrout)
app.use(proute)
app.listen(8080,async()=>{

    try {
        await connect
        console.log("Connected to database")
    } catch (error) {
        console.log("Error connecting",error)
    }
    console.log("Listening on port 8080")
})
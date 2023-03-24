let express = require("express"); 
// require("./db/conn") ; 
let app = express(); 
let port = process.env.PORT || 5000 ; 




app.post("/students" , (req,res)=>{
    res.send("welcome to student page")
})


app.get("/" , (req,res)=>{
    res.send("welcome to restAPI page")
})


app.listen({port} , ()=>{
    console.log(`you are connected to ${port}`)
})
let express = require("express"); 

require("../db/conn") ; 

let app = express(); 
let port = process.env.PORT || 3000 ; 





app.get("/" , (req,res)=>{
    res.send("welcome to restAPI page")
})


app.post("/students" , (req,res)=>{
    res.send("welcome to student page")
})

app.listen({port} , ()=>{
    console.log(`you are connected to ${port}`)
})
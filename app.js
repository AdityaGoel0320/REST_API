let express = require("express"); 
let app = express(); 
let port = process.env.port ||   5000 ; 

app.get("/" , (req,res)=>{
    res.send("welcome to restAPI page")
    

})


app.listen({port} , ()=>{
    console.log(`you are connected to ${port}`)
})
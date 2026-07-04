const express = require('express')
const app = express()
// total 65000 server can run on node
app.listen(3000,(err)=>{
    if(err){
        console.log("Problem occured");
    }else{
        console.log("server is on port 3000....");   
    }
})
app.get("/",(req,res)=>{
    res.send("Hello This side node js server...")
})
app.get("/home",(req,res)=>{
    res.send('<h1>This is our vishal page </h1>')
})
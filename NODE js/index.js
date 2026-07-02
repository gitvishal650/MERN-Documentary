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
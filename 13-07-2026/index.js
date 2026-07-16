const express = require('express')
const connect = require('./connection')
const app = express()

connect()
app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Server is ruuning on 3000")
    }
})
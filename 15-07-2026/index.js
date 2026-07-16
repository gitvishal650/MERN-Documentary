const express = require('express')
const app = express()
const connect = require('./connection')
const student = require('./routes/student')
const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.use(student)

connect()

app.get('/',(req,res)=>{
    res.send("<h1>Hello jiii</h1>")
})

app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Server is running on 3000")
    }
})
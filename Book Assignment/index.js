const express =  require('express')
const book = require('./routes/book')
const app = express();
app.use(express.json())

app.use(book)

app.get('/',(req,res)=>{
    res.send("<h1>This is Book Home Page")
})

app.listen(3000,(err)=>{
    if(err){
        console.log("problem in running server");
    }else{
        console.log("server running on 3000");
    }
})
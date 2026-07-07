const express = require("express");
const user = require('./routes/user')
const faculty = require('./routes/faculty')
const app = express();
app.use(express.json());

app.use('/user', user);
app.use('/faculty', faculty);


app.get('/',(req,res)=>{
  res.send("<h1>Hi There!</h1>")
})
app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running on 3000");
  }
}); 
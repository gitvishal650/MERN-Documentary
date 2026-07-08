const express = require("express");
const student = require("./routes/student");
const app = express();
app.use(express.json());

app.use(student);

app.get("/", (req, res) => {
  res.send("<h1>I am Home Page");
});
app.listen(3000, (err) => {
  if (err) {
    console.log("problem in running server");
  } else {
    console.log("server running on 3000");
  }
});

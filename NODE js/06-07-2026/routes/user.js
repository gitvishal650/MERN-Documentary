const express = require("express");
const users = require("../users.json");
const fs = require("fs");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json(users);
});
router.get("/user/:id", (req, res) => {
  let id = req.params.id;
  let user = users.find((user) => user.id == id);
  res.json(user);
});
router.post("/add/user", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  fs.writeFile("users.json", JSON.stringify(users), (err) => {
    if (err) {
      console.log("problem in wriiten file");
    } else {
      res.end("data has been sent successfully");
    }
  });
});
router.put("/edit/user/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  let index = users.findIndex((user) => user.id == id);
  console.log(index);
  users[index].email = "sampleuser1234@gmail.com";
  fs.writeFile("users.json", JSON.stringify(users), (err) => {
    if (err) {
      console.log("Error in udating the file");
    } else {
      res.end("Data has been updated successfully");
    }
  });
});
router.delete("/delete/user/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  let index = users.findIndex((user) => user.id == id);
  users.splice(index, 1);
  fs.writeFile("users.json", JSON.stringify(users), (err) => {
    if (err) {
      console.log("Cannot Delete");
    } else {
      res.end("Data has been deleted successfully...");
    }
  });
});
module.exports = router;

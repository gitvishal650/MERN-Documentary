const express = require("express");
const faculties = require("../faculty.json");
const fs = require("fs");
const router = express.Router();

router.get("/faculties", (req, res) => {
  res.json(faculties);
});
router.get("/faculty/:id", (req, res) => {
  let id = req.params.id;
  let faculty = faculties.find((faculty) => faculty.id == id);
  res.json(faculty);
});
router.post("/add/faculty", (req, res) => {
  console.log(req.body);
  faculties.push(req.body);
  fs.writeFile("faculty.json", JSON.stringify(faculties), (err) => {
    if (err) {
      console.log("Problem in Adding new Faculties...");
    } else {
      res.end("Data Added successfully..");
    }
  });
});
router.put("/edit/faculty/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  let index = faculties.findIndex((faculty) => faculty.id == id);
  console.log(index);
  faculties[index].email = "samplefaculty1234@gmail.com";
  fs.writeFile("faculty.json", JSON.stringify(faculties), (err) => {
    if (err) {
      console.log("Error in udating the file");
    } else {
      res.end("Data has been updated successfully");
    }
  });
});
router.delete("/delete/faculty/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  let index = faculties.findIndex((faculty) => faculty.id == id);
  faculties.splice(index, 1);
  fs.writeFile("faculty.json", JSON.stringify(faculties), (err) => {
    if (err) {
      console.log("Cannot Delete");
    } else {
      res.end("Data has been deleted successfully...");
    }
  });
});
module.exports = router;

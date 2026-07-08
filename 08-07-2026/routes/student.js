const express = require("express");
const route = express.Router();
const students = require("../student.json");
const fs = require("fs");
const student = require("../Controllers/studentController");

route.get("/student", (req, res) => {
  student.getStudent();
});

route.get("/student/:rollno", (req, res) => {
  student.getStudentById();
});

route.post("/add/student", (req, res) => {
  student.addStudent();
});

route.put("/edit/student/:rollno", (req, res) => {
  student.editStudentById();
});

module.exports = route;

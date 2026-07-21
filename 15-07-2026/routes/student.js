const express = require("express");
const StudentController = require("../controllers/StudentController");
const route = express.Router();

route.use(express.urlencoded({ extended: false }));
route.get("/", (req, res) => {
  res.render("home");
});
route.post("/add/student", (req, res) => {
  StudentController.addStudent(req, res);
});
route.get("/students", (req, res) => {
  StudentController.getStudents(req, res);
});
route.get("/student/edit/:id", (req, res) => {
  StudentController.getStudentForEdit(req, res);
});
route.post("/update/student/:id", (req, res) => {
  StudentController.updateStudent(req, res);
});
route.post("/student/delete/:id", (req, res) => {
  StudentController.deleteStudent(req, res);
});

module.exports = route;

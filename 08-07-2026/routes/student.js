const express = require("express");
const route = express.Router();
const StudentController = require("../controllers/StudentController");

route.get("/student",
  StudentController.getStudents
);

route.get("/student/:rollno",
  StudentController.getStudentById
);

route.post("/add/student",
  StudentController.addStudent
);

route.put("/edit/student/:rollno",
  StudentController.editStudentById
);

module.exports = route;

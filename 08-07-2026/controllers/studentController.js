const { get } = require("../Routes/student");
const student = require("../student.json");

const getStudents = (req, res) => {
  try {
    res.json(students);
  } catch (error) {
    console.log(error);
  }
};
const getStudentById = (req, res) => {
  try {
    let rollno = req.params.rollno;
    let index = students.find((student) => student.rollno == rollno);
    res.json(index);
  } catch (error) {
    console.log(error);
  }
};
const addStudent = (req, res) => {
  try {
  students.push(req.body);
  fs.writeFile("student.json", JSON.stringify(students), (err) => {
    if (err) {
      console.log("student cannot added");
    } else {
      res.end("student added successfully");
    }
  });
  } catch (error) {
    console.log(error);
  }
};
const editStudentById = (req, res) => {
  try {
  let studentid = req.params.studentid;
  let index = students.findIndex((student) => student.studentid == studentid);
  students[index].studentname='Think and grow rich'
  fs.writeFile("student.json", JSON.stringify(students), (err) => {
    if (err) {
      console.log("student cannot updated");
    } else {
      res.end("student Updated successfully");
      console.log(`Updated ${students[index].studentname}`);
    }
  });
  } catch (error) {
    console.log(error);
  }
};
const deleteStudentById = (req, res) => {
  try {
  let id = req.params.id;
  console.log(id);
  let index = students.findIndex((student) => student.id == id);
  students.splice(index, 1);
  fs.writeFile("students.json", JSON.stringify(students), (err) => {
    if (err) {
      console.log("Cannot Delete");
    } else {
      res.end("Data has been deleted successfully...");
    }
  });
  } catch (error) {
    console.log(error);
  }
};


module.exports = { getStudents, getStudentById, addStudent, editStudentById, deleteStudentById};

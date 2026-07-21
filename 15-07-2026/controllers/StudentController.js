const Student = require("../models/Student");
async function addStudent(req, res) {
  try {
    console.log(req.body);
    const student = new Student(req.body);
    await student.save();
    res.render("addStudentSuccess");
  } catch (err) {
    console.log(err);
  }
}
const getStudents = async (req, res) => {
  try {
    let students = await Student.find();
    res.render("studentlist", { st: students });
  } catch (err) {
    console.log(err);
  }
};

async function getStudentForEdit(req, res) {
  try {
    let id = req.params.id;
    let student = await Student.findOne({ _id: id });
    console.log(student);
    res.render("studenteditpage", {
      student: student,
    });
  } catch (err) {
    console.log(err);
  }
}
async function updateStudent(req, res) {
  try {
    let id = req.params.id;
    let student = await Student.findByIdAndUpdate(id, req.body);
    console.log(student);
    res.redirect("/students");
  } catch (err) {
    console.log(err);
  }
}
async function deleteStudent(req, res) {
  try {
    let id = req.params.id;
    await Student.deleteOne({ _id: id });
    res.redirect("/students");
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  addStudent,
  getStudents,
  getStudentForEdit,
  updateStudent,
  deleteStudent,
};

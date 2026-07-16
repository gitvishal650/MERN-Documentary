const mongoose = require("mongoose");
const Student = require("./models/Student")
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
  rollno: { type: String },
  studentName: { type: String },
  fatherName: { type: String },
  mobileNo: { type: String },
});
module.exports = mongoose.model('Student', StudentSchema)
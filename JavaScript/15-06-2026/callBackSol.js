// asynchronous java script
let students = [
  {
    name: "vishal",
    age: 22,
    marks: 51,
  },
  {
    name: "lalit",
    age: 23,
    marks: 74,
  },
  {
    name: "rohan",
    age: 21,
    marks: 45,
  },
  {
    name: "navdeep",
    age: 26,
    marks: 72,
  },
  {
    name: "navdeep",
    age: 26,
    marks: 72,
  },
];
let newStudent = {
  name: "Vineet",
  age: 24,
  marks: 90,
};
function addStudent(newStudent, callback) {
  console.log("Adding student...");
  setTimeout(() => {
    students.push(newStudent);
    console.log(newStudent.name + " Added");
    callback();
  }, 10000);
}

function displayStudents() {
  students.forEach((student) => {
    console.log(student);
  });
}
addStudent(newStudent, displayStudents);

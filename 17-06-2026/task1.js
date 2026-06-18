// Promise Task ---EXERCISE
const students = [
  {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    mobileNo: "9876543210",
    age: 20,
  },
  {
    name: "Priya Singh",
    email: "priya.singh@example.com",
    mobileNo: "9876543211",
    age: 21,
  },
  {
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    mobileNo: "9876543212",
    age: 22,
  },
  {
    name: "Sneha Gupta",
    email: "sneha.gupta@example.com",
    mobileNo: "9876543213",
    age: 19,
  },
  {
    name: "Vikram Patel",
    email: "vikram.patel@example.com",
    mobileNo: "9876543214",
    age: 23,
  },
];
newStudent = {
  name: "Ananya Mishra",
  email: "ananya.mishra@example.com",
  mobileNo: "9876543215",
  age: 10,
};

function addStudent() {
  console.log("Fetching data from MARS....");
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (newStudent.age < 19) {
        reject("Age must be 18+");
      } else {
        students.push(newStudent);
        resolve(students);
      }
    }, 3000);
  });
  return pr;
}
addStudent(newStudent)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

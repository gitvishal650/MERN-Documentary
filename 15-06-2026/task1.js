let employees = [
  {
    name: "vishal",
    age: 22,
    salary: 51000,
    mobileno: 999999999
  },
  {
    name: "lalit",
    age: 23,
    salary: 74000,
    mobileno: 999999999
  },
  {
    name: "rohan",
    age: 21,
    salary: 45000,
    mobileno: 999999999
  },
  {
    name: "navdeep",
    age: 26,
    salary: 72000,
    mobileno: 999999999
  },
  {
    name: "navdeep",
    age: 26,
    salary: 72000,
    mobileno: 999999999
  }
];
let newEmployee = {
  name: "Vineet",
  age: 24,
  salary: 90000,
  mobileno: 999999999
};

function addEmployee(newStudent, callback) {
  console.log("");
  setTimeout(() => {
    employees.push(newEmployee);
    console.log(newEmployee.name + " Added");
    callback();
  }, 3000);
}
// function displayEmployee() {
//   employees.forEach((employee) => console.log(employee));
// }
addEmployee(newEmployee, () => {
  employees.forEach((employee) => console.log(employee));
});

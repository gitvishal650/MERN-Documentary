let employees = [
  {
    name: "vishal",
    age: 22,
    salary: 51000,
    mobileno: 999999999,
  },
  {
    name: "lalit",
    age: 23,
    salary: 74000,
    mobileno: 999999999,
  },
  {
    name: "rohan",
    age: 21,
    salary: 45000,
    mobileno: 999999999,
  },
  {
    name: "navdeep",
    age: 26,
    salary: 72000,
    mobileno: 999999999,
  },
  {
    name: "navdeep",
    age: 26,
    salary: 72000,
    mobileno: 999999999,
  },
];
let newEmployee = {
  name: "Vineet",
  age: 24,
  salary: 90000,
  mobileno: 999999999,
};

// problem statement
// we will make two function, addEmployee() which will 3 second
// another funtion displayEmployee() which will take zero second

function addEmployee(newEmployee) {
  let pr = new Promise((resolve, reject) => {
      console.log("Adding Employee...");
    setTimeout(() => {
      employees.push(newEmployee);
      console.log("New Employee added successfully");
      resolve(employees);
    }, 3000);
  });
  return pr;
}
addEmployee(newEmployee)
  .then((result) => console.log(result))
  .catch((err)=>{console.log(err);
  });

// callbackemphell.js
let employees = [
  {
    eid: 101,
    name: "vishal",
    mobileno: "42533463",
    post: "Professor",
  },
  {
    eid: 102,
    name: "lakshay",
    mobileno: "42533463",
    post: "Assistant Professor",
  },
  {
    eid: 103,
    name: "lalit",
    mobileno: "42533463",
    post: "Associate Professor",
  },
  {
    eid: 104,
    name: "Ankur gupta",
    mobileno: "42533463",
    post: "Assistant Professor",
  },
];
function getEmployee(id, callback) {
  console.log("Fetching....");
  setTimeout(() => {
    let emp = employees.find((employee) => employee.eid === id);
    callback(emp);
  }, 5000);
}
function getBasicSalary(post, callback) {
  let salary;
  setTimeout(() => {
    if (post === "Assistant Professor") salary = 40000;
    else if (post === "Associate Professor") salary = 50000;
    else if (post === "Professor") salary = 56000;
    else console.log("invalid");
    console.log(salary);
    callback(salary);
  }, 3000);
}
function calculateSalary(salary) {
  let grossSalary = 0;
  hra = salary * 0.4;
  da = salary * 0.8;
  fixAmount = 5000;
  grossSalary = salary + hra + da + fixAmount;
  console.log("Gross Salary: "+grossSalary);
}
getEmployee(101, (emp) => {
  console.log(emp);
  getBasicSalary(emp.post, (salary) => {
    console.log(salary);
    calculateSalary(salary);
  });
});

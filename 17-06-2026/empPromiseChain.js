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

function getEmployee(id) {
  console.log("Fetching Data...");
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      let emp = employees.find((employee) => employee.eid === id);
      if (!emp) reject("Employee not Found");
      else resolve(emp);
    }, 1000);
  });
  return pr;
}
function getBasicSalary(post) {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      let basicSal = 0;
      if (post == "Assistant Professor") basicSal = 40000;
      else if (post == "Associate Professor") basicSal = 50000;
      else basicSal = 56000;
      resolve(basicSal);
    }, 1000);
  });
  return pr;
}
function calculateGrossSalary(basicSal) {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      let grossSal = 0;
      grossSal = basicSal + basicSal * 0.4 + basicSal * 0.8;
      resolve(grossSal);
    }, 1000);
  });
  return pr;
}
getEmployee(101)
  .then((emp) => {
    console.log(emp);
    return getBasicSalary(emp.post)
        
  })
  .then((basicSal) => {
    console.log(basicSal+"$");
     return calculateGrossSalary(basicSal)
  })
  .then((grossSal)=>{
    console.log(grossSal+"$");
  })
  .catch((err) => console.log(err));

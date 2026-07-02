let employees = [
  {
    id: 101,
    name: "vishal",
    post: "Manager",
  },
  {
    id: 102,
    name: "lalit",
    post: "HR",
  },
  {
    id: 103,
    name: "Utkarsh",
    post: "Dev",
  },
  {
    id: 104,
    name: "lakshay",
    post: "Incharge",
  },
];

function getEmp(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let e = employees.find((employee) => employee.id === id);
      if (e) resolve(e);
      else reject("Employee Not found");
    }, 500);
  });
}
function getBasicSal(post) {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      let basicSal = 0;
      if (post == "Incharge") basicSal = 50000;
      else if (post == "Manager") basicSal = 55000;
      else if (post == "Dev") basicSal = 46000;
      else basicSal = 51000;

      resolve(basicSal);
    }, 500);
  });
  return pr;
}

function getHRA(basisSal) {
  let pr = new Promise((resolve, reject) => {
    let hra = 0;
    setTimeout(() => {
        if(basisSal>=50000)hra = 15000
        else if(basicSal>=30000 && basisSal < 50000)hra=12000
        else hra=10000
      resolve(hra);
    });
  });
  return pr;
}

async function employeesSummary() {
  try {
    let emp = await getEmp(102);
    let basicSalary = await getBasicSal(emp.post);
    console.log("Basic Salary: $"+basicSalary);
    let hra = await getHRA(basicSalary);
    console.log("HRA: $"+hra);
    console.log("Gross Salary: $"+(basicSalary+hra+basicSalary*.10));
  } catch (err) {
    console.log("invalid");
  }
}
employeesSummary();
console.log("hello");

 

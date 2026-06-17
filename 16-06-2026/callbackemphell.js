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
  setTimeout(() => {
    let empPost = employees.find((employee) => employee.post === post);
    callback(empPost);
  }, 6000);
}
getEmployee(101, (emp) => {
  console.log(emp);
});

getBasicSalary("Assistant Professor", (empPost) => {
  if(!empPost){
    console.log("Not found");
    return;
  }
  if (empPost.post === "Assistant Professor") {
    console.log("40000");
  } else if (empPost.post === "Associate Professor") {
    console.log("50000");
  } else if (empPost.post === "Professor") {
    console.log("56000");
  } else {
    console.log("invalid");
  }
});

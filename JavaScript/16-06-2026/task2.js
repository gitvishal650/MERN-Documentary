// callback hell task 2
let users = [
  { userId: "101", userName: "vishal@yopmail.com" },
  { userId: "102", userName: "lalit@yopmail.com" },
  { userId: "103", userName: "rohan@yopmail.com" },
  { userId: "104", userName: "lakshay@yopmail.com" },
  { userId: "105", userName: "utkarsh@yopmail.com" },
];
function getUser(id, callback) {
  setTimeout(() => {
    let user = users.find((user) => user.userId === id);
    callback(user);
  }, 3000);
}

function getRepository(userName, callback) {
  setTimeout(() => {
    let repos = ["R1", "R2", "R3", "R4"];
    callback(repos);
  }, 2000);
}
function getCommit(repo, callback) {
  setTimeout(() => {
    let commits = ["C1", "C2", "C3"];
    callback(commits);
  }, 3000);
}
getUser("102", (user) => {
//   console.log(users);
  console.log(user);
  getRepository(user.userName, (repos) => {
    console.log(repos);
    getCommit(repos[0],(commits)=>{
        console.log(commits);
    })
  })
});

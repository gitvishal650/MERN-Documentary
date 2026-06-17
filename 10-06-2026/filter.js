// first we will make the program with out using filter
// i want a new array having students whose marks is greater than 50
let students = [
    {
        name:'vishal',
        age:22,
        marks:51
    },
    {
        name:'lalit',
        age:23,
        marks:74
        
    },
    {
        name:'rohan',
        age:21,
        marks:45
        
    },
    {
        name:'navdeep',
        age:26,
        marks:72

    }
]
let filterdStudents = []
students.forEach((student)=>{
    if(student.marks>50){
        filterdStudents.push(student);
    }
})
console.log(filterdStudents);


let newStudents = students.filter((student)=>student.marks>50)
console.log(newStudents);

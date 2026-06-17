let students=[
    {
        name:'vishal',
        age:20,
        course:'MCA',
        marks:81
    },
    {
        name:'tushar',
        age:21,
        course:'BTECH',
        marks:82
    },
    {
        name:'manish',
        age:22,
        course:'BTECH',
        marks:87
        
    },
    {
        name:'rohan',
        age:21,
        course:'MCA',
        marks:86
        
    },
    {
        name:'harry',
        age:20,
        course:'BTECH',
        marks:85

    }
]

    students.forEach((student)=>{
        if(student.course==='BTECH'){
            console.log(student.name);          
        }
    })
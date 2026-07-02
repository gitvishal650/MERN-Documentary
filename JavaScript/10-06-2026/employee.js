let employees =[
    {
        name:'vishal',
        age:31,
        salary:50000,
        location:'Lucknow'
        
    },
    {
        name:'rohit',
        age:35,
        salary:50000,
        location:'Banglore'
        
    },
    {
        name:'Hritik',
        age:41,
        salary:50000,
        location:'Lucknow'
        
    },
    {
        name:'krishan',
        age:45,
        salary:50000,
        location:'Gurgoan'

    },
    {
        name:'Rohan',
        age:49,
        salary:60000,
        location:'Lucknow'

    }
]
let filterdEmp = employees.filter(employee=>employee.age>40&&employee.location=='Lucknow')
console.log(filterdEmp);

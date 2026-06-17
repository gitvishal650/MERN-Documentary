let employees = [
    {
        name:'Ram',
        age:41,
        salary:56000
    },
    {
        name:'Mohan',
        age:42,
        salary:51000
    },
    {
        name:'Sohan',
        age:43,
        salary:53000       
    },
    {
        name:'Kumar',
        age:44,
        salary:57000
    }
]
    let sum=0;
        //for each loop 
    employees.forEach((employee)=>{
        console.log(employee.name)
        sum+=employee.salary;
    })
    console.log(sum);
    

    let filterdEmployee = []
    employees.forEach((employee)=>{
        if(employee.salary>52000){
            filterdEmployee.push(employee)
        }
    })
    console.log(filterdEmployee);


    
    let names = employees.map((employee)=>{
        return 'Mr.' + employee.name
    })
    console.log(names);
    
    
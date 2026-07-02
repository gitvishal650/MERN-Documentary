let visitors = [

    {
        name:'vishal',
        eventName:'Birthday',
        eventPlace:'Rishikesh',
        gender:'Male'
    },
    {
        name:'ishika',
        eventName:'Anniversary',
        eventPlace:'Ghaziabad',
        gender:'Female'
        
    },
    {
        name:'riya',
        eventName:'Birthday',
        eventPlace:'Mumbai',
        gender:'Female'
        
    },
    {
        name:'ayan',
        eventName:'Party',
        eventPlace:'Rishikesh',
        gender:'Male'

    }
]
let k=visitors.map((visitor)=>{
    if(visitor.gender=='Female'){
        return "Ms. "+visitor.name;
    }else{
        return "Mr. "+visitor.name;
    }
})
console.log(k);

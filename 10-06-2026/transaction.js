let transactions = [
    {
        transid:'8954633',
        Amount:5000,
        user:'abc@yopmail.com',
        transactionDate: '9-06-2026'
    },
    {
        transid:'8954637',
        Amount:6000,
        user:'ram@yopmail.com',
        transactionDate: '10-06-2026'
    },
    {
        transid:'8954677',
        Amount:7000,
        user:'shyam@yopmail.com',
        transactionDate: '11-06-2026'
    },
    {
        transid:'8954656',
        Amount:9000,
        user:'john@yopmail.com',
        transactionDate: '12-06-2026'
    },
    {
        transid:'8954634',
        Amount:10000,
        user:'sohan@yopmail.com',
        transactionDate: '12-06-2026'
    }
];

// let filteredData = transactions.map((transaction)=>{
//     let data = transaction.transid + " \t " + transaction.user;
//     return data;
// });

// console.log(filteredData);
let newtransaction = transactions.find(transaction=>transaction.user=='john@yopmail.com')
console.log(newtransaction);

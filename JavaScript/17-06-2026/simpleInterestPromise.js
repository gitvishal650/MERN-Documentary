function simpleInterest(p, r, t) {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {}, 3000);
    if(t<1){
        reject("Time can not be negative")
    }else{
        let si = (p*r*t)/100;
        resolve(si);
    }
  });
  return pr;
}
simpleInterest(1000,10,2)
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    })
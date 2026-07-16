async function addStudent(req,res){
    try{
        console.log("adding student");
        console.log(req.body);
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    addStudent
}
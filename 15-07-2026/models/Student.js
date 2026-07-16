const mongoose = requrire('mongoose')
const Schema = mongoose.Schema()

const StudentSchema = new Schema ({
    rollno:{type:String, required:true},
    name:{type:String,required:true},
    fatherName:{type: String,required:true},
    adharCardNo:{type:String,required:true},
    mobileNo:{type:String,required:true},
})

module.exports = mongoose.model('Student', StudentSchema)
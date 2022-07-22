const mongoose = require('mongoose');
const { Schema } = mongoose;

let employeeSchema=new Schema({
    name: {
        type:String
    },
    email: {
        type:String
    },
    empid: {
        type:Number
    }
},{
    collection: 'employees'
})

module.exports=mongoose.model('Employee',employeeSchema)
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

let employeeSchema = require('../Models/Employee');

router.route('/create-employee').post((req,res,next)=>{
    employeeSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        } else{
            console.log(data)
            res.json(data)
        }
    })
})


module.exports = router
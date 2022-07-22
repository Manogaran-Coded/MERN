const express = require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3003;
//Express Data

const employeedata = require('../Backend/routes/emproute')



app.use(cors())


mongoose.connect('mongodb://localhost:27017/myempdb')
  .then((x)=>{
      console.log(`Connection to Mongo Database: "${x.connections[0].name}"`)
  })
  .catch((err)=> {
    console.log("Error Connecting to Mongo",err)
  })


//Middleware
app.use(bodyParser.json())
app.use(bodyPArser.urlencoded({
  extended: true
}))

//localhost:3003/emp/create-employee
app.use('/emp',employeedata)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
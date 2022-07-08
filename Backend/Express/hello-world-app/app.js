const express = require("express");
//creates the server
const app = express();
const port = 8000;

//Defining the endpoint
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/add",(req,res)=> {
    const num1=2;
    const num2=3;
    const num3=num1 + num2;
    res.send("SUM="+num3);
   // console.log(`Addition of 2 number is  ${num3})!`);

});



//Starting the server
app.listen(port, () =>
{
    console.log(`HelloWorld app listening on port ${port})!`);
    
});


//how to create express generator
//express any name
//express local-library --view=pug
//cd .\local-library\
//npm install
//$ENV:DEBUG = "local-library:*; npm start"

//npm init -- create package.json
//npm install --insall all dependeincies
//npm install express
//npm install eslint --save-dev -- need only for Dev environment not for production

//npm install express-generator-g
//npm audit fix --force

//set-ExecutionPolicy RemoteSigned -Scope CurrentUser 
//$ENV:DEBUG = "local-library:*; npm start"
// npm install -g express-generator

/*Run this in windows powershell
set-ExecutionPolicy RemoteSigned -Scope CurrentUser --> TYPE A

Get-ExecutionPolicy -list */

//Hello-World-generator-app
//SET DEBUG=Hello-World-generator-app:* | npm start
//$ENV:DEBUG="local-library:*"; npm start

//npm run devstart -- if this command doesn't work, please execute below queries
/*
npm install -g nodemon 
npm install -g nodemon --save 
npm install --save-dev nodemon 
npm install -g nodemon@debug 

npm install -g --force nodemon */
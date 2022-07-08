const express = require("express");
const bodyparser = require("body-parser");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");
InitiateMongoServer();
const app= express();
const PORT = process.env.PORT || 4000;
app.use(bodyparser.json());
/*
var mongoose = require('mongoose');
mongoose.connect(mongoDB, {userNewUrlParser: true, useUnifiedTopolgy: true});

var db=mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));
*/
app.get("/", (req,res)=>
{
    res.json({message: "Express aquth dep API works!"});
});

/*
*Router Middleware
*Router - /user/*
*Method - *
*/
app.use("/user",user);
app.listen(PORT, (req,res)=>{
    console.log(`Express server listening on PORT ${PORT}`);
});
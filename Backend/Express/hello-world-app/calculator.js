const express = require("express");
//creates the server
const app = express();
const port = 8000;

//Defining the endpoint
app.get("/", (req, res) => {
    res.send("Hello World");
});

//Starting the server
app.listen(port, () =>
{
    console.log(`HelloWorld app listening on port ${port})!`);
});
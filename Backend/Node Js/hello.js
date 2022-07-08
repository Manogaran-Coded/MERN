//Load the HTTP module
const http = require("http");
const hostname = "127.0.0.1";
const port = 8000;

//Create the HTTP server
const server = http.createServer(function(req,res)
{
    res.writeHead(200,{"Content-Type": "text/plain"});

    //send the response body
    res.end("Hello World!\n");
});

//Start the Server
server.listen(port, hostname, function()
{
    console.log(`Server running at http://${hostname}:${port}/`);
    });

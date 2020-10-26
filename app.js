const http = require("http");
const express = require("express");
const path = require("path");
const cors = require("cors");


// Express app server
var app = express();


// Middlewares
app.use(cors());
app.use(express.json());  // Parse JSON body
app.use(express.urlencoded({extended: true})); // Parse URL Encoded bodies.


// Serve public assets and api resources
app.use(express.static("./build"));  // Serve build folder
app.use(express.static(path.join(__dirname, "/src/api_resources")));


// Serve React App
app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

// Create http server
var server = http.createServer(app);
var PORT = process.env.PORT || 3030;

// Listen for connections
server.listen(PORT,
    ()=> console.log(`API Portal running on port ${PORT}`)
);

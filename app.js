const express = require("express");
const app = express();

const path = require("path")

app.use (express.static(path.join(__dirname, "public"))); 


app.listen(3000, ()=>{
    console.log("Servidor funcionando en http://localhost:3000");
});

app.get("/", function(req,res) {         
    res.sendFile(path.join(__dirname, "/views/home.html")) 
});

app.get("/register", function(req,res) {         
    res.sendFile(path.join(__dirname, "/views/register.html")) 
});

app.get("/login", function(req,res) {         
    res.sendFile(path.join(__dirname, "/views/login.html")) 
});
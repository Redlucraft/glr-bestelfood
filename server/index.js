const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db")
const app = require("express");

var corsOptions = {
    origin: "http://localhost:5173"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.get("/", (req, res) =>{
    res.json({message: "Welcome to food ordering!"})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log("server up and running!")
})
import db from "./db.js"

import express from "express"
// const db = require("./db") 

// const express = require("express")

const app = express()
db();
app.get("/",(req, res) => {
    res.send("Hello Diksha")
    })


    app.listen(3000,()=>{
console.log("server is running")
})
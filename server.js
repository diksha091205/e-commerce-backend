import db from "./db.js"
import User from "./models/users.model.js"; 
import express from "express"
// const db = require("./db") 

// const express = require("express")

const app = express()

app.use(express.json())


db();
app.get("/",(req, res) => {
    res.send("Hello Diksha")
    })
 
    app.post("/user" , async (req,res)=>{
        const user = new User(req.body)
        try {
            await user.save()
            res.status(201).send({user})
        } catch (error) {
            res.status(400).send(error)
        }
    })
    

 app.listen(3000,()=>{
console.log("server is running")
})
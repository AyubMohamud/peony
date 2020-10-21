const express = require("express")

const app = express

const path = require("path")
module.exports = function(app){
    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/submit", function(req,res){
        res.sendFile(path.join(__dirname, "../public/submit-joke.html"))
    })
}
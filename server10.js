const express=require('express');
const app=express();
const port=8083;
const ejs= require("ejs");

app.set("view engine","ejs");


// app.use(express.static("public"));   middleware

app.listen(port,()=>{
    console.log("Server is running")
})
app.get("/",(req,res)=>{
    res.render("index");
})
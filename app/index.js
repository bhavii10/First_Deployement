const express=require('express');
const app=express();
// const port=8083;
const ejs= require("ejs");
const path=require("path");
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));


// app.use(express.static("public"));   middleware

app.listen(port,()=>{
    console.log("Server is running")
})
app.get("/",(req,res)=>{
    res.render("index");
})

module.exports=app;

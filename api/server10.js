const express=require("express");
const chalk=require('chalk');
const app=express();
const path=require("path");
const ejs=require('ejs');

app.set('view engine','ejs');
app.set('view',path.join(__dirname,"views"));

app.get('/home',(req,res)=>{
    const name=req.params.name
    res.render("index");
})

module.exports=app
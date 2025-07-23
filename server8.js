const express=require('express');
const app=express();
const port=8082;
const chalk=require('chalk');


app.listen(port,()=>{
    console.log(chalk.blue(`Server is running on ${port}`));
});

app.get("/",(req,res)=>{
    res.send("<div><h1> Welcome to express server</h1><ul><li> list1 item<li>list2 item<li><ul><div>")
})
const express = require("express")
const app = express()

//app.use(express.json())
app.use(express.urlencoded())

let users=[]

app.get("/users",(req,res)=>{
    res.send(users);
})


app.post("/users", (req, res) => {
    console.log(req.body);
    //java script object
    //res.send("Information received");

    //json format
    res.json({
        status:"received",
        info:req.body
    })
});

app.listen(8082, ()=>{
    console.log("Server is running");

})

app.use(function(req,res,next){
console.log("Hello world i m middleware function")
next();
})


app.use(function(req,res,next){
    console.log("Hello world i am middle ware function 2");

    next();
})


app.get("/", (req,res)=>{
    res.send("hello world")
})

//REST API -> Representational State Transfer Application Programming Interface
//get->retrieve
//post--> frontend to backend data bhjna
//patch-->update krna
//delete --> delete user

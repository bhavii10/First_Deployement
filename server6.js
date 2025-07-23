const express=require('express');

const app=express();

const port=8080;

app.use(express.json());
let user=[
    {
        id:1,
        Name: "Bhavii",
        age: "21"
    },
    {
        id:2,
        Name: "Aniket",
        age: "22"
    },
    {
        id:3,
        Name: "Ashima",
        age: "20"
    }
]

app.get("/user/:Name",(req,res)=>{
    //req.params info milti hai

    const userinfo=user.filter(user=> user.Name==req.params.Name)

    res.json({
        message:"user info",
        userinfo
    })
});

app.listen(port,()=>{
    console.log(`it is working on ${port}`);
});

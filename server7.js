const express=require('express');

const app=express();

const port=8081;

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

app.get("/user/:id",(req,res)=>{
    //req.params info milti hai

    let id=parseInt(req.params.id);

    console.log(req.parmas);

    const userinfo=user.filter(user=> user.id==id)

    res.json({
        message:"user info",
        userinfo
    })
});

app.listen(port,()=>{
    console.log(`it is working on ${port}`);
});

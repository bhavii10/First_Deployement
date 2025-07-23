const express=require('express');

const app=express();

const port=8089;

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

app.patch("/user",(req,res)=>{
    // req.body se info aygi
    //id->Jiska karna
    //name->joh krna hai aone update

    user.forEach(u => {
        if (u.id == req.body.id) {
            u.Name = req.body.name; // ✅ Use correct key
        }
    });

    res.json({
        message:"user updated with info",
        user
    })


});


app.listen(port,()=>{
    console.log(`it is working on ${port}`);
});
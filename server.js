const express = require("express")

const app = express()


// Home route -> fb.com
app.get('/', (req, res) => { // callback function
  //req and res -> object
  // req object -> frontend sai data bhejte hai woh sb ata hai
  // res object k andr jo ap send krte ho ooski poori information hoti hai
  res.send('Welcome to G4')
})

app.get("/testseries",(req,res)=>{

  res.send("Hello to test series")
})

app.get("/testSeriesEnd",(req,res)=>{

  res.send("Hello testseries end")
})

app.get("/users",(req,res)=>{

    res.send("ALL users")
  })

  app.get("/users/explain",(req,res)=>{

    res.send("ALL users smjhe kya")
  })


app.listen(8083, ()=>{
console.log("Server is running")
})




// ctrl + c => server close
// start -> node server.js
// everytime if we make any changes we need to restart the server

// nodemon -> install krna pdega agar server baar baar restart ni krna
// get request from search bar

// post request :- sending request from front end to backend -> backend pr front end sai information bhejna get post request khelata hai
//  form -> availabl ni hai -> postman ka use krenge or wahan pr apka form replicate hoga
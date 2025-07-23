const express = require("express");
const app = express();
const port = 8060;


app.use(express.json());

let phone=[
    {
        company:"apple",
        model:"iphone13",
        variant: "512gb"
    },
    {
        company:"samsung",
        model:"ultra",
        variant: "256gb"
    }
]


app.listen(port, () => {
  console.log(`server running on ${port}`);
});


// app.get("/searchingphone", (req, res) => {
//   console.log("Welcome to phone search"); 
// //     console.log(req.query);
// //   res.json({
// //     message: "Your query received",
// //     query: req.query
// //   });
// });



app.get("/searchingphone", (req, res) => {
  console.log("Welcome to phone search");

  let company = req.query.company?.toLowerCase(); // case-insensitive
  let result = null;

  phone.forEach(item => {
    if (item.company.toLowerCase() === company) {
      result = item.variant;
    }
  });

  if (result) {
    res.send(result);
  } else {
    res.send("Please enter valid query");
  }
});








//req.query joh receiver kra usko dekhna


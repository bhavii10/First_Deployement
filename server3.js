const express = require("express");
const app = express();
const port = 8070;

app.use(express.json());

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

// Corrected route handler
app.get("/searchingphone", (req, res) => {
  console.log("Welcome to phone search"); // to log query parameters like ?name=iphone
    console.log(req.query);
  res.json({
    message: "Your query received",
    query: req.query
  });
});



//req.query joh receiver kra usko dekhna


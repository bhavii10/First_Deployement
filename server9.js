const express = require('express');
const app = express();
const port = 8083;
const chalk = require('chalk');

// Tell express to use EJS as the view engine
app.set('view engine', 'ejs');

// Route to render your EJS file
app.get('/', (req, res) => {
    res.render('index');  // No need to write .ejs
});

// Start the server
app.listen(port, () => {
    console.log(chalk.blue(`Server is running on port ${port}`));
});
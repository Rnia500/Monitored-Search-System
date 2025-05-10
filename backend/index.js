const express = require('express');
const mysql = require('mysql2');
const app = express();
//const bodyParser = require('boyd-parser')
const path = require('path');

// Set Pug as the template or view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(bodyParser.urlencoded({entended : true}));

//Mysql Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: " "//replace
});

db.connect((err) => {
    if(err) {
        console.error("Database connection failed: ", err);
        return;
    }
    console.log("Connected to Mysql");
});

//Route to fetch data from Mysql and render it in pug
app.get("/", (req, res) => {
    const query = "SELECT * FROM user"; //Adjust table name
    db.query(query, (err, results) => {
        if(err){
            console.error("Error fetching data", err);
            return res.status(500).send("database query error");
        }
        res.render("index", {users: results});
    });
});

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Routes for different pages
app.get('/', (req, res) => res.render('index'));
app.get('/user', (req, res) => res.render('user'));
app.get('/admin', (req, res) => res.render('admin'));
app.get('/beneficiary', (req, res) => res.render('beneficiary'));
app.get('/distribution', (req, res) => res.render('distribution'));
app.get('/login', (req, res) => res.render('login'));
app.get('/request', (req, res) => res.render('request'));
app.get('/stockItem', (req, res) => res.render('stockItem'));
app.get('/volunteer', (req, res) => res.render('volunteer'));

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
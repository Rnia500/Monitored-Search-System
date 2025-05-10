const express = require('express');
const mysql = require('mysql2');
const app = express();
//const bodyParser = require('boyd-parser')
const path = require('path');
const bodyParser = require('body-parser');
const { connectToDevice, readDeviceLocation } = require('./bluetooth.js');
const { createMap, drawRoute } = require('./mapping.js');
const { handleError } = require('./errorHandling.js');

const boatRoots = require('./database/routes/boat.js');
const cargoRoots = require('./database/routes/cargo.js');
const historyRoots = require('./database/routes/history.js'); 
const mailingRoots = require('./database/routes/mailing.js');
const notificationRoots = require('./database/routes/notification.js');
const parametersRoots = require('./database/routes/parameters.js');
const reportRoots = require('./database/routes/report.js');
const searchRoots = require('./database/routes/search.js');
const userRoots = require('./database/routes/user.js');



// Set Pug as the template or view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

<<<<<<< HEAD
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
=======
// Middleware for parsing JSON and URL-encoded data

app.use(bodyParser.json());
>>>>>>> 028e870411736ea94d4070ac8fb66a0052674ccb

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/boat', boatRoots);
app.use('/cargo', cargoRoots);
app.use('/history', historyRoots);
app.use('/mailing', mailingRoots);
app.use('/notification', notificationRoots);
app.use('/parameters', parametersRoots);
app.use('/report', reportRoots);
app.use('/search', searchRoots);
app.use('/user', userRoots);

// Use the code below to add the session validation to your server application.
// More info: https://docs.descope.com/build/guides/session


// Routes for different pages
app.get('/', (req, res) => res.render('index'));
<<<<<<< HEAD
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
=======
app.get('/about', (req, res) => res.render('about'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/search', (req, res) => res.render('search'));
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));
app.get('/dashboard', (req, res) => res.render('dashboard'));


// API route for connecting a device
app.get('/connect', async (req, res) => {
  try {
    const device = await connectToDevice();
    const location = await readDeviceLocation();
    const map = createMap();
    drawRoute(map, location);
    res.json({ status: 'success', device, location });
  } catch (error) {
    handleError(error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

>>>>>>> 028e870411736ea94d4070ac8fb66a0052674ccb

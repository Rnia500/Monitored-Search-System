const express = require('express');
const app = express();
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



// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing JSON and URL-encoded data

app.use(bodyParser.json());

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
app.get('/about', (req, res) => res.render('about'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/search', (req, res) => res.render('search'));
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));

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


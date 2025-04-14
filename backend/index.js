const express = require('express');
const app = express();
const path = require('path');
const { connectToDevice, readDeviceLocation } = require('./bluetooth.js');
const { createMap, drawRoute } = require('./mapping.js');
const { handleError } = require('./errorHandling.js');

const boatRoots = require('./routes/boat'); 
const cargoRoots = require('./routes/cargo');  
const historyRoots = require('./routes/history');  
const mailingRoots = require('./routes/mailing');  
const notificationRoots = require('./routes/notification');  
const parametersRoots = require('./routes/parameters');  
const reportRoots = require('./routes/report');  
const searchRoots = require('./routes/search');  
const userRoots = require('./routes/user');  


// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

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


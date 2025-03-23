const express = require('express');
const app = express();
const path = require('path');
const { connectToDevice, readDeviceLocation } = require('./bluetooth.js');
const { createMap, drawRoute } = require('./mapping.js');
const { handleError } = require('./errorHandling.js');

// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Routes for different pages
app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/search', (req, res) => res.render('search'));

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

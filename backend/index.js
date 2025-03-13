const express = require('express');
const sequelize = require('./database/db'); // Importing sequelize instance

const app = express();
const port = 3000;

// Example of a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sync database (Sequelize)
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Failed to sync database:', error);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

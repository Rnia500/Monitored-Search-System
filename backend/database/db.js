require('dotenv').config();  // Load environment variables from .env

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql', // Default to MySQL if dialect is not provided.
    port: process.env.DB_PORT || 3306,
  }
);

sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch((err) => console.error('Database connection error:', err));

module.exports = sequelize;

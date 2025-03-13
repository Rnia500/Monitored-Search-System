const { DataTypes } = require('sequelize');
const sequelize = require('../database/db'); // Adjust path if needed

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'users', // Optional: specify a custom table name
  timestamps: true // Optional: whether to add `createdAt` and `updatedAt`
});

module.exports = User;

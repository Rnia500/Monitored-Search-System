const { DataTypes } = require('sequelize');
<<<<<<< HEAD
const sequelize = require('../database/db');
=======
const sequelize = require('../db');
>>>>>>> 028e870411736ea94d4070ac8fb66a0052674ccb

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
  },

  role: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
  tableName: 'users',
  timestamps: true
});

module.exports = User;
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Report = sequelize.define('Report', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }

}, {
  tableName: 'reports',
  timestamps: true
});

module.exports = Report;
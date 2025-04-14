const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const History = sequelize.define('History', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  action: {
    type: DataTypes.STRING,
    allowNull: false
  },

  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }

}, {
  tableName: 'histories',
  timestamps: true
});

module.exports = History;
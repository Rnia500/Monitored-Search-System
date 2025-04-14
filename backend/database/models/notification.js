const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Notification = sequelize.define('Notification', {
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
  },

  read: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }

}, {
  tableName: 'notifications',
  timestamps: true
});

module.exports = Notification;
const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Parameters = sequelize.define('Parameters', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  key: {
    type: DataTypes.STRING,
    allowNull: false
  },

  value: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
  tableName: 'parameters',
  timestamps: true
});

module.exports = Parameters;
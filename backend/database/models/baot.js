// models/Boat.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Boat = sequelize.define('Boat', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  capacity: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'boats',
  timestamps: true
});

module.exports = Boat;
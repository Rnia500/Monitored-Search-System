// models/stockItem.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const stockItem = sequelize.define('stockItem', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  distribId: { type: DataTypes.INTEGER, references: { model: 'distribution', key: 'id' } },
  foodItem: { type: DataTypes.STRING, allowNull: false },
  quantity: { type: DataTypes.FLOAT, allowNull: false },
  expDate: { type: DataTypes.DATE, allowNull: false },
}, {
  tableName: 'stockItem',
  timestamps: true
});

module.exports = stockItem;
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Cargo = sequelize.define('Cargo', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false
  },

  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  destination: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
  tableName: 'cargos',
  timestamps: true
});

module.exports = Cargo;
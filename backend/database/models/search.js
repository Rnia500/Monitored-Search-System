const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Search = sequelize.define('Search', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  query: {
    type: DataTypes.STRING,
    allowNull: false
  },

  resultsFound: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

}, {
  tableName: 'searches',
  timestamps: true
});

module.exports = Search;
const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Mailing = sequelize.define('Mailing', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  recipient: {
    type: DataTypes.STRING,
    allowNull: false
  },

  subject: {
    type: DataTypes.STRING,
    allowNull: false
  },

  message: {
    type: DataTypes.TEXT,
    allowNull: false
  }

}, {
  tableName: 'mailings',
  timestamps: true
});

module.exports = Mailing;
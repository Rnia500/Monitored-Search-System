const { DataTypes } = require("sequelize");
const sequelize = require('../db');
// models/Parameters.js
const Parameters = sequelize.define('Parameters', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },

    name: {
       type: DataTypes.STRING,
        allowNull: false 
      },

    value: { 
      type: DataTypes.DATE, 
      allowNull: false 
    }
    
  }, {
    tableName: 'parameters',
    timestamps: true
  });
  
  module.exports = Parameters;
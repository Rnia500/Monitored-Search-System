// models/Search.js
const { DataTypes } = require('sequelize');
const Search = sequelize.define('Search', {
    id: {
       type: DataTypes.INTEGER, 
       primaryKey: true, 
       autoIncrement: true 
      },

    date: {
       type: DataTypes.DATE,
        allowNull: false 
      },

    location: {
       type: DataTypes.STRING,
        allowNull: false 
      },

    duration: {
       type: DataTypes.FLOAT, 
       allowNull: false 
      },

    responsibleId: { 
      type: DataTypes.INTEGER,
       references: { model: 'users', key: 'id' } 
      },

    status: { 
      type: DataTypes.STRING, 
      allowNull: false }
  }, {
    tableName: 'searches',
    timestamps: true
  });
  
  module.exports = Search;
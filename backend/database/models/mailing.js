const { DataTypes } = require("sequelize");

// models/Mailing.js
const Notification = sequelize.define('Mailing', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },

    recipientId: { 
        type: DataTypes.INTEGER, 
        references: { model: 'users', key: 'id' } 
      },

    message: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

  }, {
    tableName: 'mailing',
    timestamps: true
  });
  
  module.exports = Mailing;
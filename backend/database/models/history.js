// models/History.js
const History = sequelize.define('History', {
    id: {
       type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true 
      },

    action: { 
      type: DataTypes.STRING,
       allowNull: false 
      },

    userId: { 
      type: DataTypes.INTEGER,
       references: { model: 'users', key: 'id' } 
      },

    date: { 
      type: DataTypes.DATE, 
      allowNull: false 
    }
    
  }, {
    tableName: 'history',
    timestamps: true
  });
  
  module.exports = History;
  
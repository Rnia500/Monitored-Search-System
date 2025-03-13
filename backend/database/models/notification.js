
// models/Notification.js
const Notification = sequelize.define('Notification', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    message: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    recipientId: { type: DataTypes.INTEGER, references: { model: 'users', key: 'id' } }
  }, {
    tableName: 'notifications',
    timestamps: true
  });
  
  module.exports = Notification;
// models/request.js
const request = sequelize.define('request', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    benefId: { type: DataTypes.INTEGER, references: { model: 'beneficiary', key: 'id' } },
    date: { type: DataTypes.DATE, allowNull: false },
  }, {
    tableName: 'request',
    timestamps: true
  });
  
  module.exports = request;
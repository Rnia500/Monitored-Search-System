// models/Report.js
const Report = sequelize.define('Report', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    searchId: { type: DataTypes.INTEGER, references: { model: 'searches', key: 'id' } },
    date: { type: DataTypes.DATE, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    electronicSignature: { type: DataTypes.STRING, allowNull: false }
  }, {
    tableName: 'reports',
    timestamps: true
  });
  
  module.exports = Report;
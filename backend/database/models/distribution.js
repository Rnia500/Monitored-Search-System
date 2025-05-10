// models/distribution.js
const distribution = sequelize.define('distribution', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    requestId: { type: DataTypes.INTEGER, references: { model: 'request', key: 'id' } },
    volunteerId: { type: DataTypes.INTEGER, references: { model: 'volunteer', key: 'id' } },
    date: { type: DataTypes.DATE, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    electronicSignature: { type: DataTypes.STRING, allowNull: false }
  }, {
    tableName: 'distribution',
    timestamps: true
  });
  
  module.exports = distribution;
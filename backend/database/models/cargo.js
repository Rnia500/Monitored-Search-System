
// models/Cargo.js
const Cargo = sequelize.define('Cargo', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description: { type: DataTypes.STRING, allowNull: false },
    weight: { type: DataTypes.FLOAT, allowNull: false },
    destination: { type: DataTypes.STRING, allowNull: false },
    boatId: { type: DataTypes.INTEGER, references: { model: 'boats', key: 'id' } }
  }, {
    tableName: 'cargo',
    timestamps: true
  });
  
  module.exports = Cargo;
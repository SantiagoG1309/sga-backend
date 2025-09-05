const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Personal = sequelize.define('Personal', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especializacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  anosExperiencia: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  foto: {

    type: DataTypes.STRING(500),
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true
});

module.exports = Personal;

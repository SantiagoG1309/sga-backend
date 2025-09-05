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
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true
});

module.exports = Personal;

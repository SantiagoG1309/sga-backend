const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Blog = sequelize.define('Blog', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  tipoCaso: {
    type: DataTypes.STRING,
    allowNull: false
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  breveDescripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  video: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  esReciente: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
  tableName: 'blogs',
  timestamps: true
});

module.exports = Blog;

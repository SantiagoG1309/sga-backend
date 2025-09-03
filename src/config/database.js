
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'pravda',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'Andres1070.',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
  }
);


const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL conectado correctamente.');
    await sequelize.sync();
    console.log('Modelos sincronizados con la base de datos.');
  } catch (error) {
    console.error('Error conectando a PostgreSQL o sincronizando modelos:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };

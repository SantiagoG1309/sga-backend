
const { Sequelize } = require('sequelize');

require('dotenv').config();


// Recomendado: manejar la contraseña SOLO por variable de entorno

// Crear la base de datos si no existe antes de inicializar Sequelize
const createDatabaseIfNotExists = async () => {
  const dbName = process.env.DB_NAME || 'pravda';
  const dbUser = process.env.DB_USER || 'postgres';
  const dbPassword = process.env.DB_PASSWORD;
  const dbHost = process.env.DB_HOST || 'localhost';
  const dbPort = process.env.DB_PORT || 5432;
  const { Client } = require('pg');
  const client = new Client({
    user: dbUser,
    password: dbPassword,
    host: dbHost,
    port: dbPort,
    database: 'postgres', // Conectamos a la base default para crear la nueva
  });
  await client.connect();
  const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = $1`, [dbName]);
  if (res.rowCount === 0) {
    await client.query(`CREATE DATABASE "${dbName}"`);
    console.log(`Base de datos '${dbName}' creada automáticamente.`);
  } else {
    console.log(`Base de datos '${dbName}' ya existe.`);
  }
  await client.end();
};

const sequelize = new Sequelize(
  process.env.DB_NAME || 'pravda',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD, // No poner valor por defecto
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
  }
);


const connectDB = async () => {
  try {
    await createDatabaseIfNotExists();
    await sequelize.authenticate();
    console.log('PostgreSQL conectado correctamente.');
  // Importar el modelo Personal para que se cree la tabla
  require('../models/Personal');
  await sequelize.sync();
  console.log('Modelos sincronizados con la base de datos.');

    // Crear usuario admin por defecto si no existe
    const User = require('../models/User');
    const bcrypt = require('bcrypt');
    const adminEmail = 'admin@hotmail.com';
    const adminName = 'Admin';
    const adminPassword = 'admin123';
    const adminRole = 'admin';
    const existingAdmin = await User.findOne({ where: { email: adminEmail } });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      await User.create({ name: adminName, email: adminEmail, password: hashedPassword, role: adminRole });
      console.log('Usuario admin creado: admin@hotmail.com / admin123');
    } else {
      console.log('Usuario admin ya existe.');
    }
  } catch (error) {
    console.error('Error conectando a PostgreSQL o sincronizando modelos:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };

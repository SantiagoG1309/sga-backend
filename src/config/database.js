const { Sequelize } = require('sequelize');

require('dotenv').config();
console.log('DB_PASSWORD:', process.env.DB_PASSWORD, typeof process.env.DB_PASSWORD);


// Recomendado: manejar la contraseña SOLO por variable de entorno
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
    await sequelize.authenticate();
    console.log('PostgreSQL conectado correctamente.');
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
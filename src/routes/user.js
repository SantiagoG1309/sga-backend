const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


const { adminOnly } = require('../middlewares/auth');

// Ruta para registrar usuario solo para admin
router.post('/register', adminOnly, userController.register);

// Ruta para login de usuario
router.post('/login', userController.login);

module.exports = router;

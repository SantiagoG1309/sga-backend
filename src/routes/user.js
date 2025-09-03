const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para registrar usuario
router.post('/register', userController.register);

module.exports = router;

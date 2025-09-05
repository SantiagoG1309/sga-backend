const express = require('express');
const router = express.Router();
const personalController = require('../controllers/personalController');

// Obtener todo el personal
router.get('/', personalController.getAllPersonal);

// Crear nuevo personal
router.post('/', personalController.createPersonal);

// Actualizar personal
router.put('/:id', personalController.updatePersonal);

// Eliminar personal
router.delete('/:id', personalController.deletePersonal);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getCases, createCase } = require('../controllers/caseController');
const { authMiddleware } = require('../middlewares/auth');
const userRoutes = require('./user');

// Rutas para usuarios
router.use('/users', userRoutes);

// Rutas para casos
router.get('/cases', authMiddleware, getCases);
router.post('/cases', authMiddleware, createCase);

module.exports = router;

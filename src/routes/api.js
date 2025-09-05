const express = require('express');
const router = express.Router();
const { getCases, createCase } = require('../controllers/caseController');
const { adminOnly } = require('../middlewares/auth');
const userRoutes = require('./user');
const personalRoutes = require('./personal');
const blogRoutes = require('./blog');

// Rutas para usuarios
router.use('/users', userRoutes);

// Rutas para personal
router.use('/personal', personalRoutes);

// Rutas para blog
router.use('/blog', blogRoutes);

// Rutas para casos
router.get('/cases', adminOnly, getCases);
router.post('/cases', adminOnly, createCase);

module.exports = router;

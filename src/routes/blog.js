const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Obtener todos los blogs
router.get('/', blogController.getAllBlogs);

// Obtener blogs recientes
router.get('/recent', blogController.getRecentBlogs);

// Crear nuevo blog
router.post('/', blogController.createBlog);

// Actualizar blog
router.put('/:id', blogController.updateBlog);

// Eliminar blog
router.delete('/:id', blogController.deleteBlog);

module.exports = router;

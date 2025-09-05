const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      order: [['fecha', 'DESC']]
    });
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los blogs' });
  }
};

exports.getRecentBlogs = async (req, res) => {
  try {
    const recentBlogs = await Blog.findAll({
      where: { esReciente: true },
      order: [['fecha', 'DESC']],
      limit: 5
    });
    res.status(200).json(recentBlogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener blogs recientes' });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const { fecha, tipoCaso, titulo, breveDescripcion, imagen, video } = req.body;
    
    if (!fecha || !tipoCaso || !titulo || !breveDescripcion) {
      return res.status(400).json({ message: 'Los campos fecha, tipo de caso, título y descripción son obligatorios.' });
    }

    // Marcar otros blogs como no recientes si hay más de 5
    const totalBlogs = await Blog.count();
    if (totalBlogs >= 5) {
      await Blog.update(
        { esReciente: false },
        { 
          where: {},
          order: [['fecha', 'ASC']],
          limit: totalBlogs - 4
        }
      );
    }

    const blog = await Blog.create({
      fecha,
      tipoCaso,
      titulo,
      breveDescripcion,
      imagen,
      video,
      esReciente: true
    });

    res.status(201).json({ 
      message: 'Blog creado exitosamente', 
      blog 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear blog' });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha, tipoCaso, titulo, breveDescripcion, imagen, video } = req.body;

    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog no encontrado' });
    }

    await blog.update({
      fecha,
      tipoCaso,
      titulo,
      breveDescripcion,
      imagen,
      video
    });

    res.status(200).json({ 
      message: 'Blog actualizado exitosamente', 
      blog 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar blog' });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog no encontrado' });
    }

    await blog.destroy();
    res.status(200).json({ message: 'Blog eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar blog' });
  }
};

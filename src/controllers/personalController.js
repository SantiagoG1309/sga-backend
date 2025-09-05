const Personal = require('../models/Personal');

exports.getAllPersonal = async (req, res) => {
  try {
    const personal = await Personal.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.status(200).json(personal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el personal' });
  }
};

exports.createPersonal = async (req, res) => {
  try {
    const { nombre, cargo, especializacion, anosExperiencia, foto } = req.body;
    
    if (!nombre || !cargo || !especializacion || !anosExperiencia) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    const personal = await Personal.create({
      nombre,
      cargo,
      especializacion,
      anosExperiencia,
      foto
    });

    res.status(201).json({ 
      message: 'Personal creado exitosamente', 
      personal 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear personal' });
  }
};

exports.updatePersonal = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, cargo, especializacion, anosExperiencia, foto } = req.body;

    const personal = await Personal.findByPk(id);
    if (!personal) {
      return res.status(404).json({ message: 'Personal no encontrado' });
    }

    await personal.update({
      nombre,
      cargo,
      especializacion,
      anosExperiencia,
      foto
    });

    res.status(200).json({ 
      message: 'Personal actualizado exitosamente', 
      personal 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar personal' });
  }
};

exports.deletePersonal = async (req, res) => {
  try {
    const { id } = req.params;
    
    const personal = await Personal.findByPk(id);
    if (!personal) {
      return res.status(404).json({ message: 'Personal no encontrado' });
    }

    await personal.destroy();
    res.status(200).json({ message: 'Personal eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar personal' });
  }
};

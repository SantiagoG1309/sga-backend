// Middleware para verificar que el usuario es admin
const adminOnly = (req, res, next) => {
	// El frontend debe enviar el usuario en el body o en headers
	// Aquí se asume que el usuario viene en req.body.user o req.headers['x-user-role']
	const user = req.body.user || null;
	const role = user?.role || req.headers['x-user-role'];
	if (role !== 'admin') {
		return res.status(403).json({ message: 'Solo los administradores pueden registrar usuarios.' });
	}
	next();
};

module.exports = { adminOnly };

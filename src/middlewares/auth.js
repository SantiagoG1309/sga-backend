// Middleware de autenticación de ejemplo
const authMiddleware = (req, res, next) => {
	// Permite pasar todas las peticiones
	next();
};

module.exports = { authMiddleware };

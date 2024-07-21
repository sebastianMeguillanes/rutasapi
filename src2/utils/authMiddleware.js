const { validateAuthToken } = require('../services/authService');

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      throw new Error('No se ha proporcionado un token de autenticación');
    }

    const token = authHeader.split(' ')[1];
    const decoded = await validateAuthToken(token);
    if (!decoded) {
      throw new Error('Token de autenticación inválido');
    }
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(401).json({ error: error.message });
  }
};

module.exports = {
  authMiddleware,
}
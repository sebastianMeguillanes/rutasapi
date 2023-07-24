const jwt = require('jsonwebtoken');
const username = 'sebas';
const password = '1234';
const expiresIn = '1h';
const defaultSecretKey = 'R4pW8sZ2x!%YqC@9'; 

// Middleware de autenticación
function authMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Acceso no autorizado' });
    }
    try {
      // Verificamos la validez del token
    const decoded = jwt.verify(token, defaultSecretKey, { ignoreExpiration: false });

    if (decoded.exp <= Date.now() / 1000) { 
        // Convertir segundos a milisegundos
        return res.status(401).json({ error: 'Token expirado' });
    }
    req.user = decoded;
      // Continuamos con el flujo normal de la solicitud
    next();
    } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
    }
}

const autenticate = (usernameReq, passwordReq) => {
  if (usernameReq === username && passwordReq === password) {
    // Generar el token con fecha de expiración
    const token = jwt.sign({ username }, defaultSecretKey, { expiresIn });
     // Enviamos el token al cliente
  return token;
  } else {
    throw new Error('Credenciales inválidas');
  }
};
module.exports = {
    authMiddleware,
    autenticate
};
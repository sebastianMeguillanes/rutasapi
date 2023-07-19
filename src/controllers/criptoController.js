const crypto = require('crypto');

// Genera una clave secreta única
const claveSecreta = crypto.randomBytes(32);

// Función para encriptar una URL con AES
function encriptarURL(url) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', claveSecreta, iv);
    const encrypted = cipher.update(url, 'utf8', 'hex') + cipher.final('hex');
    return iv.toString('hex') + encrypted;
}

  // Función para desencriptar una URL encriptada con AES
function desencriptarURL(urlEncriptada) {
    const iv = Buffer.from(urlEncriptada.slice(0, 32), 'hex');
    const encrypted = urlEncriptada.slice(32);
    const decipher = crypto.createDecipheriv('aes-256-cbc', claveSecreta, iv);
    const decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
    return decrypted;
}

module.exports = {
    encriptarURL,
    desencriptarURL
};
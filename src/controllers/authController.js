const authService = require("../services/authService");

const login = (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;
    try {
        const token = authService.autenticate(username, password)
        res.json({ token });
    } catch (error) {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
};

module.exports = {
    login
}
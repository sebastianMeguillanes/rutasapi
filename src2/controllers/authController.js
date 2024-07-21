
const authService = require('../services/authService');

async function loginHandler(req, res) {
  try {
    const { 
        id,
        password 
    } = req.body;

    const user = await authService.authenticateUser(id, password);
    if (user) {
        const session = await authService.createSession(user);
        res.status(200).json({ session });
    }
   
  } catch (error) {
    if(error.message=="Contraseña incorrecta"){
    res.status(401).json({ error: error.message }
    );
    }else{
      res.status(402).json({ error: error.message });  
    }
  }
}


module.exports = {
  loginHandler,
};

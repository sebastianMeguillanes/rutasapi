const express = require("express");
const bodyParser = require("body-parser");
const urlRoutes = require("./v1/routes/urlRoutes");
const db = require("./database/db");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// Configurar body-parser para procesar datos del cuerpo de la solicitud
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Resto del código de tu archivo 'index.js' ...

db.url.loadDatabase((err) => {
    if (err) {
      console.error('Error al cargar la base de datos:', err);
      process.exit(1);
    } else {
      console.log('Base de datos cargada correctamente');
      startServer();
    }
  });

  
function startServer() {
    app.use("/api/v1/url", urlRoutes);

    
    app.listen(PORT ,() =>{
        console.log("Server listen en el puerto",PORT)
    }); 
}
 
const express = require("express");
const urlRoutes = require("./v1/routes/urlRoutes")
const app = express();
const PORT = process.env.PORT || 3000;


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
 
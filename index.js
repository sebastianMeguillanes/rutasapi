const app = require("./src2/app");
const db = require("./src2/config/nedb");
require("dotenv").config();

const PORT = process.env.PORT ;

db.url.loadDatabase((err) => {
    if (err) {
        console.error("Error al cargar la base de datos:", err);
        process.exit(1);
    } else {
        console.log("Base de datos cargada correctamente");
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    }
});

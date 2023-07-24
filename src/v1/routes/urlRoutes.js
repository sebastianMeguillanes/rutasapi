const express = require("express");
const router = express.Router();
const urlController = require("../../controllers/urlController");
router
    .get("/", urlController.getAllUrls)
    .get("/:Id", urlController.getOneUrl)
    .post("/", urlController.createNewUrl)
    .put("/:Id", urlController.updateOneUrl)
    .delete("/:Id",urlController.deleteOneUrl );   
    
module.exports = router;
//datos estadisticos que se puedan recibir de un dispositivo mobil
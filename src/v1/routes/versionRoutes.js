const express = require("express");
const router = express.Router();
const versionController = require("../../controllers/versionController");
router
    .get("/", versionController.getAllVersions)
    .get("/:Id", versionController.getOneVersion)
    .post("/", versionController.createNewVersion)
    .put("/:Id", versionController.updateOneVersion)
    .delete("/:Id",versionController.deleteOneVersion);   
    
module.exports = router;
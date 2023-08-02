const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authController");
const appControler = require("../../controllers/appController");
router
    .post("/login", authController.login)
    .get("/", appControler.getAllUrl_crip);
    
    
module.exports = router;
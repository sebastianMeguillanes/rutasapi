const express = require('express');
const versionController = require('../controllers/versionController');
const guard = require('../utils/authMiddleware');

const router = express.Router();


router.get('/latest',versionController.getLatestVersion); 
router.get('/',guard.authMiddleware, versionController.getAllVersions);
router.post('/',guard.authMiddleware, versionController.createNewVersion);
router.put('/:id',guard.authMiddleware, versionController.updateVersion);   
router.get('/:id',guard.authMiddleware, versionController.getOneVersion);
router.delete('/:id',guard.authMiddleware, versionController.deleteVersion);

module.exports = router;
const express = require('express');
const versionController = require('../controllers/versionController');

const router = express.Router();


router.get('/lastest', versionController.getLatestVersion); 
router.get('/', versionController.getAllVersions);
router.post('/', versionController.createNewVersion);
router.put('/:id', versionController.updateVersion);   
router.get('/:id', versionController.getOneVersion);
router.delete('/:id', versionController.deleteVersion);

module.exports = router;
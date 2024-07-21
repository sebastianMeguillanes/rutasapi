const express = require('express');
const urlController = require('../controllers/urlController');

const router = express.Router();


router.get('/lastest', urlController.getLatestUrl); 
router.get('/', urlController.getAllUrls);
router.post('/', urlController.createNewUrl);
router.put('/:id', urlController.updateUrl);   
router.get('/:id', urlController.getOneUrl);
router.delete('/:id', urlController.deleteUrl);

module.exports = router;
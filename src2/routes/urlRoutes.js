const express = require('express');
const urlController = require('../controllers/urlController');
const guard = require('../utils/authMiddleware');

const router = express.Router();


router.get('/latest', urlController.getLatestUrl); 
router.get('/', urlController.getAllUrls);
router.post('/',guard.authMiddleware, urlController.createNewUrl);
router.put('/:id',guard.authMiddleware, urlController.updateUrl);   
router.get('/:id',guard.authMiddleware, urlController.getOneUrl);
router.delete('/:id',guard.authMiddleware, urlController.deleteUrl);

module.exports = router;
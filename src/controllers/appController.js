const appService = require('../services/appService');

const getAllUrl_crip = (req, res) => {
    appService.getAll((error, allUrls) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener las URLs' });
        } else {
            res.json(allUrls);
        }
    });
};

module.exports  = getAllUrl_crip;
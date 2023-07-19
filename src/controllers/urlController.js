const urlService = require("../services/urlService");
const moment =  require("moment");
const { encriptarURL } = require('./criptoController');

const getAllUrls = (req, res) => {
    urlService.getAllUrls((error, allUrls) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener las URLs' });
        } else {
            res.json(allUrls);
        }
    });
};

const getOneUrl = (req, res) => {
    const urlId = req.params.urlId;
    urlService.getOneUrl(urlId, (error, oneUrl) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener la URL' });
        } else {
            res.json(oneUrl);
        }
    });
};

const createNewUrl = (req, res) => {
    const nombre = req.body.nombre;
    const url = req.body.url;
    const urlEncriptada = encriptarURL(url);
    const fechaActual = moment().format('DD/MM/YYYY');

    const nuevoDato = {
        nombre: nombre,
        url: url,
        url_encriptada: urlEncriptada,
        fecha: fechaActual
    };
    console.log(nuevoDato);
    urlService.createNewUrl(nuevoDato, (error, newUrl) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear la URL' });
        } else {
            res.json(newUrl);
        }
    });
};

const updateOneUrl = (req, res) => {
    const urlId = req.params.urlId;
    const urlData = req.body;

    urlService.updateOneUrl(urlId, urlData, (error, numReplaced) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al actualizar la URL' });
        } else {
            res.json({ message: `Se actualizaron ${numReplaced} registros` });
        }
    });
};

const deleteOneUrl = (req, res) => {
    const urlId = req.params.urlId;
    urlService.deleteOneUrl(urlId, (error, numRemoved) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al eliminar la URL' });
        } else {
            res.json({ message: `Se eliminaron ${numRemoved} registros` });
        }
    });
};

module.exports = {
    getAllUrls,
    getOneUrl,
    createNewUrl,
    updateOneUrl,
    deleteOneUrl,
};
const urlService = require("../services/urlService");
const moment = require("moment");

const getAllUrls = async (req, res) => {
    try {
        const allUrls = await urlService.getAll();
        res.json(allUrls);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las URLs' });
    }
};

const getOneUrl = async (req, res) => {
    const urlId = req.params.id; 
    try {
        const oneUrl = await urlService.getOne(urlId);
        res.json(oneUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la URL' });
    }
};

const createNewUrl = async (req, res) => {
    const {
        nombre,
        url 
    } = req.body;

    const nuevoDato = {
        nombre,
        url,
    };

    try {
        const newUrl = await urlService.createNew(nuevoDato);
        res.json(newUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la URL' });
    }
};

const updateUrl = async (req, res) => {
    const urlId = req.params.id; 
    const { nombre, version, url } = req.body;
    const fechaActual = moment().format('DD/MM/YYYY');

    const urlData = {
        nombre,
        url,
        fecha: fechaActual
    };

    try {
        const updatedUrl = await urlService.updateOne(urlId, urlData);
        res.json(updatedUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la URL' });
    }
};

const deleteUrl = async (req, res) => {
    const urlId = req.params.id;
    try {
        await urlService.deleteOne(urlId);
        res.json({ message: 'URL eliminada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la URL' });
    }
};

const getLatestUrl = async (req, res) => {
    try {
      const latestUrl = await urlService.getLatest();
      res.json(latestUrl);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la URL más reciente' });
    }
  };


module.exports = {
    getAllUrls,
    getOneUrl,
    createNewUrl,
    updateUrl,
    deleteUrl,
    getLatestUrl,
};

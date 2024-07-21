const versionService = require("../services/versionService");
const moment = require("moment");

const getAllVersions = async (req, res) => {
    try {
        const allversions = await versionService.getAll();
        res.json(allversions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las versions' });
    }
};

const getOneVersion = async (req, res) => {
    const versionId = req.params.id; 
    try {
        const oneversion = await versionService.getOne(versionId);
        res.json(oneversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la version' });
    }
};

const createNewVersion = async (req, res) => {
    const {
        version 
    } = req.body;

    const nuevoDato = {
        version,
    };

    try {
        const newversion = await versionService.createNew(nuevoDato);
        res.json(newversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la version' });
    }
};

const updateVersion = async (req, res) => {
    const versionId = req.params.id; 
    const { version } = req.body;
    const fechaActual = moment().format('DD/MM/YYYY');

    const versionData = {
        version,
        fecha: fechaActual
    };

    try {
        const updatedversion = await versionService.updateOne(versionId, versionData);
        res.json(updatedversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la version' });
    }
};

const deleteVersion = async (req, res) => {
    const versionId = req.params.id;
    try {
        await versionService.deleteOne(versionId);
        res.json({ message: 'version eliminada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la version' });
    }
};

const getLatestVersion = async (req, res) => {
    try {
      const latestversion = await versionService.getLatest();
      res.json(latestversion);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la version más reciente' });
    }
  };


module.exports = {
    getAllVersions,
    getOneVersion,
    createNewVersion,
    updateVersion,
    deleteVersion,
    getLatestVersion,
};

const versionService = require("../services/versionService");
const moment =  require("moment");


const getAllVersions = (req, res) => {
    versionService.getAll((error, allVersiones) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener las URLs' });
        } else {
            res.json(allVersiones);
        }
    });
};

const getOneVersion = (req, res) => {
    const urlId = req.params.Id;
    versionService.getOne(urlId, (error, oneVersion) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener la Version' });
        } else {
            res.json(oneVersion);
        }
    });
};

const createNewVersion = (req, res) => {
    const nuevoDato = {
        nombre: req.body.nombre,
        version: req.body.version,
        fecha: moment().format('DD/MM/YYYY')
    };
    versionService.createNew(nuevoDato, (error, newVersion) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear la Version' });
        } else {
            res.json(newVersion);
        }
    });
};

const updateOneVersion = (req, res) => {
    const Id = req.params.Id;
    const VersionData = {
        nombre: req.body.nombre,
        url: req.body.version,
        url_encriptada: encriptarURL(req.body.url),
        fecha: moment().format('DD/MM/YYYY')
    };
    versionService.updateOne(Id, VersionData, (error, numReplaced) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al actualizar la URL' });
        } else {
            res.json({ message: `Se actualizaron ${numReplaced} registros` });
        }
    });
};

const deleteOneVersion = (req, res) => {
    const Id = req.params.Id;
    versionService.deleteOne(Id, (error, numRemoved) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al eliminar la Verion' });
        } else {
            res.json({ message: `Se eliminaron ${numRemoved} registros` });
        }
    });
};

module.exports = {
    getAllVersions,
    getOneVersion,
    createNewVersion,
    updateOneVersion,
    deleteOneVersion,
};
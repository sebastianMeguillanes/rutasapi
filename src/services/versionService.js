const db = require('../database/db');

// Obtener todas las URLs
const getAll = (callback) => {
    db.version.find({}, { nombre: 1, version: 1, fecha: 1 }, (err, docs) => {
        if (err) {
        console.error(err);
        return callback('Error al obtener los datos', null);
        }
    callback(null, docs);
    });
};

// Obtener una URL por su ID
const getOne = (urlId, callback) => {
    db.version.findOne({ _id: urlId }, (err, doc) => {
    if (err) {
        console.error(err);
        return callback('Error al obtener la version', null);
    }
    callback(null, doc);
    });
};

// Crear una nueva URL
const createNew = (versionData, callback) => {
    db.version.insert(versionData, (err, newDoc) => {
    console.log(versionData);
    if (err) {
        console.error(err);
        return callback('Error al crear la version', null);
    }
    callback(null, newDoc);
    });
};

// Actualizar una URL por su ID
const updateOne = (Id, urlData, callback) => {
    db.version.update({ _id: Id }, { $set: urlData }, {}, (err, numReplaced) => {
    if (err) {
        console.error(err);
        return callback('Error al actualizar la URL', null);
    }
    callback(null, numReplaced);
    });
};

// Eliminar una URL por su ID
const deleteOne = (Id, callback) => {
    db.version.remove({ _id: Id }, {}, (err, numRemoved) => {
    if (err) {
        console.error(err);
        return callback('Error al eliminar la version', null);
    }
    callback(null, numRemoved);
    });
};

// Exportar las funciones del servicio
module.exports = {
    getAll,
    getOne,
    createNew,
    updateOne,
    deleteOne
};
const db = require('../database/db');

// Obtener todas las URLs
const getAllUrls = (callback) => {
  db.url.find({}, { nombre: 1, url: 1, fecha: 1 }, (err, docs) => {
    if (err) {
      console.error(err);
      return callback('Error al obtener los datos', null);
    }
    callback(null, docs);
  });
};

// Obtener una URL por su ID
const getOneUrl = (urlId, callback) => {
  db.url.findOne({ _id: urlId }, (err, doc) => {
    if (err) {
      console.error(err);
      return callback('Error al obtener la URL', null);
    }
    callback(null, doc);
  });
};

// Crear una nueva URL
const createNewUrl = (urlData, callback) => {
  db.url.insert(urlData, (err, newDoc) => {
    console.log(urlData);
    if (err) {
      console.error(err);
      return callback('Error al crear la URL', null);
    }
    callback(null, newDoc);
  });
};

// Actualizar una URL por su ID
const updateOneUrl = (urlId, urlData, callback) => {
  db.url.update({ _id: urlId }, { $set: urlData }, {}, (err, numReplaced) => {
    if (err) {
      console.error(err);
      return callback('Error al actualizar la URL', null);
    }
    callback(null, numReplaced);
  });
};

// Eliminar una URL por su ID
const deleteOneUrl = (urlId, callback) => {
  db.url.remove({ _id: urlId }, {}, (err, numRemoved) => {
    if (err) {
      console.error(err);
      return callback('Error al eliminar la URL', null);
    }
    callback(null, numRemoved);
  });
};

// Exportar las funciones del servicio
module.exports = {
  getAllUrls,
  getOneUrl,
  createNewUrl,
  updateOneUrl,
  deleteOneUrl
};
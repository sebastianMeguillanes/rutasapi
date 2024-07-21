const db = require('../config/nedb');

// Crear una nueva URL
const createNew = async (urlData) => {
    return new Promise((resolve, reject) => {
      const newUrl = {
        nombre: urlData.nombre,
        url: urlData.url,
        fecha: new Date()  
      };
      db.url.insert(newUrl, (err, newDoc) => {
        if (err) {
          reject('Error al crear la URL');
        } else {
          resolve(newDoc);
        }
      });
    });
  };

// Obtener todas las URLs
const getAll = async () => {
  return new Promise((resolve, reject) => {
    db.url.find({}, (err, docs) => {
      if (err) {
        reject(new Error('Error al obtener las URLs'));
      } else {
        resolve(docs);
      }
    });
  });
};

// Obtener una URL por ID
const getOne = async (id) => {
  return new Promise((resolve, reject) => {
    db.url.findOne({ _id: id }, (err, doc) => {
      if (err) {
        reject(new Error('Error al obtener la URL'));
      } else if (!doc) {
        reject(new Error('URL no encontrada'));
      } else {
        resolve(doc);
      }
    });
  });
};

// Actualizar una URL por ID
const updateOne = async (id, urlData) => {
  return new Promise((resolve, reject) => {
    db.url.update({ _id: id }, { $set: { nombre: urlData.nombre, url: urlData.url, fecha: urlData.fecha } }, {}, (err, numReplaced) => {
      if (err) {
        reject(new Error('Error al actualizar la URL'));
      } else if (numReplaced === 0) {
        reject(new Error('URL no encontrada'));
      } else {
        db.url.findOne({ _id: id }, (err, updatedDoc) => {
          if (err) {
            reject(new Error('Error al obtener la URL actualizada'));
          } else {
            resolve(updatedDoc);
          }
        });
      }
    });
  });
};

// Eliminar una URL por ID
const deleteOne = async (id) => {
  return new Promise((resolve, reject) => {
    db.url.remove({ _id: id }, {}, (err, numRemoved) => {
      if (err) {
        reject(new Error('Error al eliminar la URL'));
      } else if (numRemoved === 0) {
        reject(new Error('URL no encontrada'));
      } else {
        resolve(true);
      }
    });
  });
};

const getLatest = async () => {
    return new Promise((resolve, reject) => {
        db.url.find({}).sort({ fecha: -1 }).limit(1).exec((err, docs) => {
            if (err) {
            reject(new Error('Error al obtener la URL más reciente'));
            } else if (docs.length === 0) {
            reject(new Error('No se encontraron URLs'));
            } else {
            resolve(docs[0]);
            }
        });
    });
};

module.exports = {
    createNew,
    getAll,
    getOne,
    updateOne,
    deleteOne,
    getLatest
};

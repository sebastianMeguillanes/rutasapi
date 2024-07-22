const db = require('../config/nedb');

// Crear una nueva version
const createNew = async (versionData) => {
    return new Promise((resolve, reject) => {
      const newversion = {
        nombre: versionData.nombre,
        version: versionData.version,
        fecha: new Date()  
      };
      console.log(newversion.fecha);
      db.version.insert(newversion, (err, newDoc) => {
        if (err) {
          reject('Error al crear la version');
        } else {
          resolve(newDoc);
        }
      });
    });
  };

// Obtener todas las versions
const getAll = async () => {
  return new Promise((resolve, reject) => {
    db.version.find({}, (err, docs) => {
      if (err) {
        reject(new Error('Error al obtener las versions'));
      } else {
        resolve(docs);
      }
    });
  });
};

// Obtener una version por ID
const getOne = async (id) => {
  return new Promise((resolve, reject) => {
    db.version.findOne({ _id: id }, (err, doc) => {
      if (err) {
        reject(new Error('Error al obtener la version'));
      } else if (!doc) {
        reject(new Error('version no encontrada'));
      } else {
        resolve(doc);
      }
    });
  });
};

// Actualizar una version por ID
const updateOne = async (id, versionData) => {
  return new Promise((resolve, reject) => {
    db.version.update({ _id: id }, { $set: {  version: versionData.version, fecha: versionData.fecha } }, {}, (err, numReplaced) => {
      if (err) {
        reject(new Error('Error al actualizar la version'));
      } else if (numReplaced === 0) {
        reject(new Error('version no encontrada'));
      } else {
        db.version.findOne({ _id: id }, (err, updatedDoc) => {
          if (err) {
            reject(new Error('Error al obtener la version actualizada'));
          } else {
            resolve(updatedDoc);
          }
        });
      }
    });
  });
};

// Eliminar una version por ID
const deleteOne = async (id) => {
  return new Promise((resolve, reject) => {
    db.version.remove({ _id: id }, {}, (err, numRemoved) => {
      if (err) {
        reject(new Error('Error al eliminar la version'));
      } else if (numRemoved === 0) {
        reject(new Error('version no encontrada'));
      } else {
        resolve(true);
      }
    });
  });
};

const getLatest = async () => {
    return new Promise((resolve, reject) => {
        db.version.find({}).sort({ fecha: -1 }).limit(1).exec((err, docs) => {
            if (err) {
            reject(new Error('Error al obtener la version más reciente'));
            } else if (docs.length === 0) {
            reject(new Error('No se encontraron versions'));
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

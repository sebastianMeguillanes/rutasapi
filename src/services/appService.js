const db = require('../database/db');

const getAll = (callback) => {
    db.url.find({}, { nombre: 1, url_encriptada: 1}, (err, docs) => {
    if (err) {
        console.error(err);
        return callback('Error al obtener los datos', null);
    }
    callback(null, docs);
    });
};

module.exports=getAll;
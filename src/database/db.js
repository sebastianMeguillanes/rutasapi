const Datastore = require('nedb');

const db = {};
db.url = new Datastore({ filename: '../database/urldb', autoload: true });
db.version = new Datastore({ filename: '../database/versiondb', autoload: true });
db.extras = new Datastore({ filename: '../database/extras.db', autoload: true });

module.exports = db;
const Datastore = require('nedb');

const db = {};
db.url = new Datastore({ filename: '../db/urlbd', autoload: true });
db.version = new Datastore({ filename: '../db/version', autoload: true });

module.exports = db;
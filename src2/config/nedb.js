const Datastore = require('@seald-io/nedb');

const db = {};
db.url = new Datastore({ filename: './database/url.db', autoload: true });
db.version = new Datastore({ filename: './database/versoin.db', autoload: true });

module.exports = db;
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const urlRoutes = require('./routes/urlRoutes');
const versionRoutes = require('./routes/versionRoutes');


app.use('/api/auth', authRoutes);
app.use('/api/urls', urlRoutes);
app.use('/api/versions', versionRoutes);   



module.exports = app;
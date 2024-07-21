const express = require('express');
const cors = require('cors');
const guard = require('./utils/authMiddleware');

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const urlRoutes = require('./routes/urlRoutes');
const versionRoutes = require('./routes/versionRoutes');


app.use('/api/auth', authRoutes);
app.use('/api/urls',guard.authMiddleware, urlRoutes);
app.use('/api/versions',guard.authMiddleware, versionRoutes);   


module.exports = app;
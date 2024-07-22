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
app.use('/loaderio-b9fcbe9ac99c68d1f3215e762115ff34', (req, res) => {

    //res.sendFile(path.join(__dirname, 'loaderio-b9fcbe9ac99c68d1f3215e762115ff34.txt'));
    res.status(200).json({ mensaje : "mio" });
});


module.exports = app;
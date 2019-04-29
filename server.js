const express = require('express');
const cors = require('cors');
const app = express();

// routes
const clientRouter = require('./api/routes/clientRoutes');

app.use(express.json());
app.use(cors());

// use routes
app.use('/api/clients', clientRouter);

app.get('/', (req, res) => {
    res.status(200).json({ api: 'alive!' });
});

module.exports = app;
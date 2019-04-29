const express = require('express');

const db = require('../../data/appointmentModel.js');
// const clients = require('../../data/clientModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.find()
        .then(appointments => {
            res.status(200).json(appointments);
        })
        .catch(err => res.status(500).json(err));
});

module.exports = router;
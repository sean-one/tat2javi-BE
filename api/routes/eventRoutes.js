const express = require('express');

const db = require('../../data/eventsModel.js');

const router = express.Router();

//GET all events | sanity check
router.get('/', (req, res) => {
    db.find()
        .then(event => {
            res.status(200).json(event);
        })
        .catch(err => res.status(500).json(err));
});
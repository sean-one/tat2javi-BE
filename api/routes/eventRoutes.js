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

// GET event by event id
router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.findById(id)
        .then(event => {
            if (event) {
                res.status(200).json(event);
            } else {
                res.status(404).json({ message: 'no event found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'this is a server error', err });
        });
});



module.exports = router;
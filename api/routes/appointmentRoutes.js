const express = require('express');

const db = require('../../data/appointmentModel.js');

const router = express.Router();

// GET all appointments | sanity check
router.get('/', (req, res) => {
    db.find()
        .then(appointments => {
            res.status(200).json(appointments);
        })
        .catch(err => res.status(500).json(err));
});

// GET appointment by appointment id
router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.findById(id)
        .then(appointment => {
            if (appointment) {
                res.status(200).json(appointment);
            } else {
                res.status(404).json({ message: 'no appointment found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'this is a server error', err });
        });
});

// GET appointment by client id
router.get('/client/:id', (req, res) => {
    const { id } = req.params;

    db.findByClientId(id)
        .then(appointment => {
            if (appointment) {
                res.status(200).json(appointment);
            } else {
                res.status(404).json({ message: 'this client has not appointments' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'this is a server error', err });
        });
});

module.exports = router;
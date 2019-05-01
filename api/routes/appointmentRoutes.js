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
                res.status(404).json({ message: 'this client has no appointments' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'this is a server error', err });
        });
});

// POST a new appointment
router.post('/', async (req, res) => {
    try {
        const apptData = req.body;
        const checkForExisting = await db.findByClientId(apptData.client_email);
        if (!checkForExisting) {
            try {
                const appointmentId = await db.add(apptData);
                res.status(201).json(appointmentId);
            } catch (error) {
                res.status(500).json({ error: 'unable to add your appointment' })
            }
        } else {
            res.status(200).json(checkForExisting);
        }
    } catch (error) {
        res.status(500).json({ message: 'error creating your appointment', error: error })
    }
});

// PUT endpoint to update an existing appointment
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db.update(id, changes)
        .then(count => {
            if (count) {
                res.status(200).json({ messages: `${count} appointment updated` });
            } else {
                res.status(404).json({ message: 'appointment not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'server error', err });
        })
});

// DELETE appointment by appointment id
router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then(count => {
            if (count < 1) {
                res.status(404).json({ message: 'no appointments with that id' });
            } else {
                res.status(200).json({ message: 'appointment has been deleted' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'server error', err });
        });
});

module.exports = router;
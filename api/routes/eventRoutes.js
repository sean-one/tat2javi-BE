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

// POST a new event
router.post('/', async (req, res) => {
    try {
        const eventData = req.body;
        const checkForExisting = await db.findByEvent(eventData.event_name);
        if (!checkForExisting) {
            try {
                const eventId = await db.add(eventData);
                res.status(201).json(eventId);
            } catch (error) {
                res.status(500).json({ error: 'unable to add your event' });
            }
        } else {
            res.status(200).json(checkForExisting);
        }
    } catch (error) {
        res.status(500).json({ message: 'error creating your appointment', error: error });
    }
});

// PUT endpoint to update existing event
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db.update(id, changes)
        .then(count => {
            if (count)  {
                res.status(200).json({ message: `${count} event updated` });
            } else {
                res.status(404).json({ message: 'event not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'server error', err });
        })
});

// DELETE event by id
router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then(count => {
            if (count < 1) {
                res.status(404).json({ message: 'no event with that id' });
            } else {
                res.status(200).json({ message: 'event has been deleted' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'server error', err });
        });
});

module.exports = router;
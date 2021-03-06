const express = require('express');

const db = require('../../data/clientModel.js');

const router = express.Router();

// GET all clients
router.get('/', (req, res) => {
    db.find()
        .then(clients => {
            res.status(200).json(clients);
        })
        .catch(err => res.status(500).json(err));
});

// GET client by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.findById(id)
        .then(client => {
            if (client) {
                res.status(200).json(client);
            } else {
                res.status(404).json({ message: 'client not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'this is a server error', err });
        });
});

// GET client by EMAIL
router.get('/email/:email', (req, res) => {
    const { email } = req.params;

    db.findByEmail(email)
        .then(client => {
            if (client) {
                res.status(200).json(client);
            } else {
                res.status(404).json({ message: 'unable to find client with that email'});
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'this is a server error', err });
        });
});

// POST a new client
router.post('/', async (req, res) => {
    try {
        const clientData = req.body;
        const checkForExisting = await db.findByEmail(clientData.email);
        if (!checkForExisting) {
            try {
                const clientId = await db.add(clientData);
                res.status(201).json(clientId);
            } catch (error) {
                res.status(500).json({ error: 'unable to add client to database' })
            }
        } else {
            res.status(200).json(checkForExisting);
        }
    } catch (error) {
        res.status(500).json({ message: 'error creating the client', error: error })
    }
});

// PUT / UPDATE client by id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db.update(id, changes)
        .then(count => {
            if (count) {
                res.status(200).json({ message: `${count} client updated` });
            } else {
                res.status(404).json({ message: 'client not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'server error', err });
        })
});

// DELETE client by id
router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then(count => {
            if (count < 1) {
                res.status(404).json({ message: 'please try a valid client' });
            } else {
                res.status(200).json({ message: 'client has been deleted' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'server errror', err });
        });
});

module.exports = router;
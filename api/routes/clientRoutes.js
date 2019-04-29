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
                res.status(404).json({ message: 'user not found' });
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
                res.status(404).json({ message: 'unable to find user with that email'});
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'this is a server error', err });
        });
});

module.exports = router;
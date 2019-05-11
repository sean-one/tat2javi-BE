const db = require('./dbConfig');

module.exports = {
    find,
    findById,
    findByEvent,
    add,
    update,
    remove
};

function find() {
    return db('events');
}

function findById(id) {
    return db('events').where({ id }).first();
}

function findByEvent(event_name) {
    return db('events').where({ event_name: event_name }).first();
}

function add(event) {
    return db('events').insert(event).into('events');
}

function update(id, changes) {
    return db('events').where({ id }).update(changes);
}

function remove(id) {
    return db('events').where({ id }).del();
}
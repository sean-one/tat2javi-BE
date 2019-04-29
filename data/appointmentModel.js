const db = require('./dbConfig');

module.exports = {
    find,
    findById,
    findByClientId,
    findByEmail,
    add,
    update,
    remove
};

function find() {
    return db('appointments');
}

function findById(id) {
    return db('appointments').where({ id }).first()
}

function findByClientId(id) {
    return db('appointments').where({ client_id: id }).first();
}

function findByEmail(email) {
    return db('appointments').where({ email }).first();
}

function add(appointment) {
    return db('appointments').insert(appointment).into('appointments');
}

function update(id, changes) {
    return db('appointments').where({ id }).update(changes);
}

function remove(id) {
    return db('appointments').where({ id }).del();
}
const db = require('./dbConfig');

module.exports = {
    find,
    findById,
    findByEmail,
    add,
    update,
    remove
};

function find() {
    return db('clients');
}

function findById(id) {
    return db('clients').where({ id }).first();
}

function findByEmail(email) {
    return db('clients').where({ email }).first();
}

function add(client) {
    return db('clients').insert(client).into('clients');
}

function update(id, changes) {
    return db('clients').where({ id }).update(changes);
}

function remove(id) {
    return db('clients').where({ id }).del();
}

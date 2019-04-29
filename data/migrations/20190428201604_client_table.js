
exports.up = function(knex) {
    return knex.schema.createTable('clients', clients => {
        clients.increments();

        clients
            .string('firstname')
            .notNullable();
        
        clients
            .string('lastname')
            .notNullable();
        
        clients
            .string('email')
            .notNullable()
            .unique();
        
        // may be parsed as string type in javascript
        clients
            .bigInteger('phone');
        
        clients
            .string('address')
        
        clients
            .string('city')
        
        clients
            .string('state')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('clients');
};

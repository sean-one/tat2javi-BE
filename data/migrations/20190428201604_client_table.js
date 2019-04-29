
exports.up = function(knex) {
    return knex.schema.createTable('clients', clients => {
        clients.increments('id');

        clients
            .string('firstname', 20)
            .notNullable();
        
        clients
            .string('lastname', 30)
            .notNullable();
        
        clients
            .string('email', 128)
            .notNullable()
            .unique();
        
        clients
            .integer('phone', 10);
        
        clients
            .string('address', 256)
        
        clients
            .string('city', 256)
        
        clients
            .string('state', 2)
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('clients');
};

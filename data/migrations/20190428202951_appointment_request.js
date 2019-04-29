
exports.up = function(knex) {
    return knex.schema.createTable('appointments', appointments => {
        appointments.increments('id');

        appointments
            .integer('client_id')
            .notNullable();
        
        appointments
            .string('client_email')
            .notNullable();
        
        appointments
            .boolean('deposit')
            .notNullable();
        
        appointments
            .float('deposit_value');
        
        appointments
            .bigInteger('date_options')
            .notNullable();
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('appointments');
};

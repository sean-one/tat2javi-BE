
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
            .string('description', 800)
            .notNullable();
        
        appointments
            .boolean('deposit')
            .notNullable();
        
        appointments
            .float('deposit_value');
        
        appointments
            .date('date_options')
            .notNullable();
        
        appointments
            .string('reference_material');

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('appointments');
};

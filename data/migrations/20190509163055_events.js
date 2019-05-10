
exports.up = function(knex) {
    return knex.schema.createTable('events', events => {
        events.increments('id');

        events
            .string('event_name')
            .notNullable();
        
        events
            .date('event_startDate')
            .notNullable();
        
        events
            .date('event_endDate')
            .notNullable();
        
        events
            .string('event_details')
            .notNullable();
        
        events
            .string('event_link');

        events
            .string('event_image')
            .notNullable();
        
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('events');
};

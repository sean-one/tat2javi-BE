
exports.up = function(knex) {
    return knex.schema.createTable('calendar', calendar => {
        calendar.increments('id');

        calendar
            .string('client_name')
            .notNullable();

        calendar
            .bigInteger('date')
            .notNullable();
        
        calendar
            .bigInteger('time_start')
            .notNullable()
            .unique();
        
        calendar
            .bigInteger('time_end')
            .notNullable()
            .unique();
        
        // defaults to 255 may need more room
        calendar
            .string('description')
        
        calendar
            .string('tags')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('calendar');
};

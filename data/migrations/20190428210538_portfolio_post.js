
exports.up = function(knex) {
    return knex.schema.createTable('posts', posts => {
        posts.increments('id');

        posts
            .boolean('instagram')
            .notNullable();
        
        posts
            .boolean('facebook')
            .notNullable();
    
        posts
            .string('image')
            .notNullable()
            .unique();
        
        posts
            .string('description')
            .notNullable();
        
        posts
            .string('category')
            .notNullable();
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posts');
};

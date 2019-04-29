// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/tat2javi.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + "/data/migrations"
    },
    seeds: {
      directory: __dirname + "/data/seeds/development"
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./data/migrations"
    }
  }

};

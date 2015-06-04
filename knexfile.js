// Update with your config settings.

module.exports = {

  client: 'postgresql',
  debug: true,
  connection: {
    database: 'authme',
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};

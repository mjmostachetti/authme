
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.integer('user_id');
    table.string('body');
    table.string('posted_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

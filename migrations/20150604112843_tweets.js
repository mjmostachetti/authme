
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tweets', function(table){
  	table.integer('user_id').references('id').inTable('users');
  	table.string('body');
  	table.dateTime('posted_at');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tweets')
};

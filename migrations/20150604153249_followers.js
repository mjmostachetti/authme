
exports.up = function(knex, Promise) {
  return knex.schema.createTable('followers', function(table){
  	table.integer('user_id').references('id').inTable('users');
  	table.integer('follower_id').references('id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('followers')
};

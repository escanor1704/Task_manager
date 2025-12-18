exports.up = function (knex) {
  return knex.schema
    .createTable('users', table => {
      table.increments('id').primary();
      table.string('email').notNullable().unique();
      table.string('password_hash').notNullable();
      table.string('name');
      table.timestamps(true, true);
    })
    .createTable('tasks', table => {
      table.increments('id').primary();
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table.string('title').notNullable();
      table.text('description');
      table.boolean('completed').defaultTo(false);
      table.timestamp('due_at');
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('users');
};

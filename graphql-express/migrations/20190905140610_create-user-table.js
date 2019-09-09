exports.up = async (knex) => {
  await knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users');
};

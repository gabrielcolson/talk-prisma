exports.up = async (knex) => {
  await knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('firstname');
    table.string('lastname');
  });
};

exports.down = async (knex) => {
  await knex.table.dropTableIfExists('users');
};

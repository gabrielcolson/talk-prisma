exports.up = async (knex) => {
  await knex.schema.createTable('posts', (table) => {
    table.increments('id');

    table.foreign('author').references('id').inTable('users');

    table.string('title').notNullable();
    table.string('content').notNullable();
    table.integer('author').unsigned();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('posts');
};

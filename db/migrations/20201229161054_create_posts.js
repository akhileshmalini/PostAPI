exports.up = (knex) => {
  return Promise.all([
    knex.schema.createTable('posts', (table) => {
      table.uuid('id').primary();
      table.string('title');
      table.string('body');
    }),
  ]);
};

exports.down = (knex) => {
  return Promise.all([knex.schema.dropTable('posts')]);
};

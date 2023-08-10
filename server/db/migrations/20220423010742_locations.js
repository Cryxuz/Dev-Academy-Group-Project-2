export function up(knex) {
  return knex.schema.createTable('monsters', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('location')
    table.string('type')
    table.string('description')
  })
}

export function down(knex) {
  return knex.schema.dropTable('monsters')
}

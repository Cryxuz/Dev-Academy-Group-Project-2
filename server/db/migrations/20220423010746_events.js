export function up(knex) {
  return knex.schema.createTable('hunters', (table) => {
    table.increments('id').primary()
    table.integer('monster_id').references('monsters.id')
    table.string('name')
    table.string('location')
    table.string('kills')
    table.string('description')
    table.string('price')
  })
}

export function down(knex) {
  return knex.schema.dropTable('hunters')
}

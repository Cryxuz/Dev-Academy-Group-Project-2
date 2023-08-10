/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('decks', (table) => {
    table.increments('id').primary()
    table.integer('monster_id').references('monsters.id')
    table.integer('hunter_id').references('hunters.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('decks')
}

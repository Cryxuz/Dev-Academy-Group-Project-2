export async function seed(knex) {
  await knex('hunters').del()
  await knex('monsters').del()
}

//evenst to monsters
// locations commented out (potentially mutate for monster hunters later)

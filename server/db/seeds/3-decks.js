function transformSeedData(seedData) {
  const transformedData = []

  seedData.forEach((deck) => {
    deck.monster_id.forEach((monsterId) => {
      transformedData.push({
        hunter_id: deck.hunter_id,
        monster_id: monsterId,
      })
    })
  })

  return transformedData
}

const originalSeedData = [
  {
    hunter_id: 1,
    monster_id: [4, 13, 11, 5, 1, 14, 14, 19],
  },
  {
    hunter_id: 2,
    monster_id: [18, 5, 11, 17, 13, 2, 8, 18],
  },
  { hunter_id: 3, monster_id: [19, 9, 3, 10, 7, 20] },
  { hunter_id: 4, monster_id: [11, 4, 20] },
  { hunter_id: 5, monster_id: [11, 18, 20, 20] },
  { hunter_id: 6, monster_id: [17, 7, 17] },
  {
    hunter_id: 7,
    monster_id: [16, 17, 15, 1, 15, 4, 12],
  },
  { hunter_id: 8, monster_id: [17, 5, 6] },
  { hunter_id: 9, monster_id: [20, 11, 1, 6, 18] },
  { hunter_id: 10, monster_id: [15, 3, 7, 8, 5] },
  {
    hunter_id: 11,
    monster_id: [3, 11, 11, 17, 2, 9, 5],
  },
  {
    hunter_id: 12,
    monster_id: [14, 1, 2, 4, 16, 20, 4],
  },
  {
    hunter_id: 13,
    monster_id: [8, 8, 2, 11, 10, 18, 5, 6],
  },
  { hunter_id: 14, monster_id: [11, 18, 2, 13, 19, 7] },
  {
    hunter_id: 15,
    monster_id: [2, 20, 12, 4, 12, 2, 19, 16],
  },
  {
    hunter_id: 16,
    monster_id: [9, 2, 12, 17, 11, 15, 16, 9],
  },
  { hunter_id: 17, monster_id: [10, 6, 3, 1, 6] },
  { hunter_id: 18, monster_id: [12, 19, 4] },
  { hunter_id: 19, monster_id: [1, 3, 4, 17, 2] },
  { hunter_id: 20, monster_id: [3, 15, 5, 10, 8] },
  { hunter_id: 21, monster_id: [15, 5, 1, 3] },
  { hunter_id: 22, monster_id: [8, 6, 12, 8, 12] },
  { hunter_id: 23, monster_id: [1, 1, 19, 9] },
  {
    hunter_id: 24,
    monster_id: [3, 13, 3, 4, 1, 17, 18],
  },
  { hunter_id: 25, monster_id: [12, 12, 1, 19] },
  {
    hunter_id: 26,
    monster_id: [19, 7, 14, 19, 10, 15, 20, 4],
  },
  { hunter_id: 27, monster_id: [7, 11, 8, 20, 15, 8] },
  { hunter_id: 28, monster_id: [19, 2, 10, 2, 5] },
  { hunter_id: 29, monster_id: [4, 6, 14, 17, 18, 14] },
  { hunter_id: 30, monster_id: [12, 18, 20, 16, 8] },
  { hunter_id: 31, monster_id: [8, 15, 5] },
  { hunter_id: 32, monster_id: [17, 1, 10, 17] },
  { hunter_id: 33, monster_id: [2, 20, 2, 2, 9, 14] },
  { hunter_id: 34, monster_id: [18, 9, 3, 12] },
  {
    hunter_id: 35,
    monster_id: [2, 7, 10, 10, 8, 15, 14, 12],
  },
  {
    hunter_id: 36,
    monster_id: [13, 1, 5, 7, 10, 12, 17],
  },
  {
    hunter_id: 37,
    monster_id: [5, 4, 20, 7, 12, 7, 9, 5],
  },
  {
    hunter_id: 38,
    monster_id: [20, 12, 9, 20, 3, 16, 9],
  },
  { hunter_id: 39, monster_id: [15, 3, 9, 16, 16, 4] },
  {
    hunter_id: 40,
    monster_id: [9, 16, 8, 8, 13, 8, 2, 4],
  },
]
// Your original seed data here

const transformedSeedData = transformSeedData(originalSeedData)
console.log(transformedSeedData)

export async function seed(knex) {
  await knex('decks').insert(transformedSeedData)
}

// seed_data = []

// for hunter_id in range(1, 41):
//     num_monsters = random.randint(5, 20)
//     monster_ids = random.sample(range(1, 21), num_monsters)
//     seed_data.append({"hunter_id": hunter_id, "monster_id": monster_ids})

// print(json.dumps(seed_data, indent=2))

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const hunterArray = []
for (let hunterID = 1; hunterID <= 40; hunterID++) {
  const numMonsters = getRandomNumber(3, 8)
  const monstersOwned = []

  for (let i = 1; i <= numMonsters; i++) {
    const monsterID = getRandomNumber(1, 20)
    monstersOwned.push(monsterID)
  }

  const hunterObject = {
    hunterID: hunterID,
    monstersOwned: monstersOwned,
  }

  hunterArray.push(hunterObject)
}

console.log(hunterArray)
// In this code, we first define a helper function

// function transformSeedData(seedData) {
//   const transformedData = []

//   seedData.forEach((deck) => {
//     deck.monster_id.forEach((monsterId) => {
//       transformedData.push({
//         hunter_id: deck.hunter_id,
//         monster_id: monsterId,
//       })
//     })
//   })

//   return transformedData
// }

// const originalSeedData = [
//   {
//     hunter_id: 1,
//     monster_id: [18, 5, 7, 9, 17, 7, 14, 19, 17, 1, 14, 12, 7],
//   },
//   {
//     hunter_id: 2,
//     monster_id: [7, 5, 3, 3, 19, 17, 10, 11, 18, 8, 5, 19],
//   },
//   {
//     hunter_id: 3,
//     monster_id: [16, 16, 5, 10, 18, 10, 1, 18, 12, 14, 17, 2, 2, 19, 16],
//   },
//   {
//     hunter_id: 4,
//     monster_id: [16, 4, 2, 18, 9, 4, 10, 17, 2, 19],
//   },
//   {
//     hunter_id: 5,
//     monster_id: [
//       20, 6, 5, 15, 11, 13, 8, 13, 5, 18, 16, 12, 5, 11, 17, 1, 8, 20,
//     ],
//   },
//   {
//     hunter_id: 6,
//     monster_id: [7, 3, 4, 18, 7, 7, 6, 16, 5, 4, 14, 15, 16, 12, 3],
//   },
//   {
//     hunter_id: 7,
//     monster_id: [
//       19, 15, 4, 4, 17, 5, 13, 2, 6, 10, 9, 19, 4, 5, 17, 19, 14, 8, 7, 5,
//     ],
//   },
//   {
//     hunter_id: 8,
//     monster_id: [
//       15, 19, 2, 8, 6, 17, 1, 20, 20, 18, 11, 10, 17, 15, 16, 19, 20,
//     ],
//   },
//   {
//     hunter_id: 9,
//     monster_id: [6, 18, 11, 3, 7, 20, 10, 18, 13, 20, 17, 20],
//   },
//   {
//     hunter_id: 10,
//     monster_id: [4, 7, 17, 18, 7, 8, 15, 1, 15, 20, 16, 16, 5, 14, 13],
//   },
//   {
//     hunter_id: 11,
//     monster_id: [19, 20, 5, 8, 1, 17, 20, 20, 7, 14],
//   },
//   {
//     hunter_id: 12,
//     monster_id: [13, 9, 9, 14, 20, 14, 19, 20, 15, 12, 19, 12, 15],
//   },
//   {
//     hunter_id: 13,
//     monster_id: [10, 7, 20, 19, 11, 1, 18, 6, 7, 20, 7, 1, 15, 9, 5, 1, 7],
//   },
//   {
//     hunter_id: 14,
//     monster_id: [
//       17, 20, 6, 4, 8, 13, 20, 19, 16, 2, 8, 10, 7, 2, 7, 7, 14, 11, 3, 13,
//     ],
//   },
//   {
//     hunter_id: 15,
//     monster_id: [18, 16, 15, 18, 14, 11, 6, 16, 9, 4, 20, 20, 17, 15, 17],
//   },
//   {
//     hunter_id: 16,
//     monster_id: [
//       9, 14, 6, 15, 11, 14, 15, 19, 13, 18, 4, 19, 2, 2, 15, 20, 8, 6, 1, 13,
//     ],
//   },
//   {
//     hunter_id: 17,
//     monster_id: [20, 14, 5, 19, 17, 5, 19, 16, 9, 19, 16, 15, 8, 2, 9, 2],
//   },
//   {
//     hunter_id: 18,
//     monster_id: [10, 7, 5, 13, 5, 17, 15, 5, 15, 16, 13, 13, 2, 18, 13, 17],
//   },
//   {
//     hunter_id: 19,
//     monster_id: [3, 3, 18, 20, 2, 16, 2, 2, 4, 10, 2, 5, 20, 12, 14],
//   },
//   {
//     hunter_id: 20,
//     monster_id: [16, 7, 17, 12, 2, 19, 14, 18, 18, 12],
//   },
//   {
//     hunter_id: 21,
//     monster_id: [9, 9, 12, 8, 1, 7, 16, 15, 14, 10, 2],
//   },
//   {
//     hunter_id: 22,
//     monster_id: [
//       20, 13, 14, 2, 7, 3, 16, 2, 2, 3, 4, 7, 11, 8, 13, 8, 3, 19, 3, 1,
//     ],
//   },
//   {
//     hunter_id: 23,
//     monster_id: [3, 3, 19, 6, 17, 19, 1, 3, 4, 3, 20, 10, 1, 12, 15, 6, 15],
//   },
//   {
//     hunter_id: 24,
//     monster_id: [11, 16, 11, 13, 19, 1, 2, 14, 10, 10, 8, 5, 15, 16, 20, 19],
//   },
//   {
//     hunter_id: 25,
//     monster_id: [7, 18, 11, 6, 15, 15, 14, 3, 12, 12, 12, 2, 11, 1, 2, 13],
//   },
//   {
//     hunter_id: 26,
//     monster_id: [
//       15, 19, 9, 17, 3, 12, 13, 5, 18, 11, 8, 6, 12, 6, 19, 11, 3, 3, 3, 3,
//     ],
//   },
//   {
//     hunter_id: 27,
//     monster_id: [19, 14, 15, 5, 13, 8, 5, 3, 6, 12, 13, 6, 20, 2],
//   },
//   {
//     hunter_id: 28,
//     monster_id: [
//       13, 20, 19, 17, 9, 13, 15, 5, 6, 9, 16, 19, 14, 13, 10, 7, 3, 9, 20,
//     ],
//   },
//   {
//     hunter_id: 29,
//     monster_id: [12, 9, 7, 6, 2, 6, 5, 9, 8, 18, 11, 18],
//   },
//   {
//     hunter_id: 30,
//     monster_id: [7, 12, 1, 13, 20, 2, 12, 3, 18, 14, 17, 15, 16],
//   },
//   {
//     hunter_id: 31,
//     monster_id: [15, 17, 7, 13, 16, 19, 8, 8, 20, 3, 10, 5, 20],
//   },
//   {
//     hunter_id: 32,
//     monster_id: [3, 19, 8, 18, 6, 6, 17, 3, 12, 3, 19],
//   },
//   {
//     hunter_id: 33,
//     monster_id: [
//       7, 3, 1, 6, 9, 20, 20, 17, 13, 12, 11, 13, 11, 19, 1, 5, 17, 13, 14,
//     ],
//   },
//   {
//     hunter_id: 34,
//     monster_id: [5, 13, 17, 14, 20, 6, 1, 3, 15, 1, 12, 3, 9, 8, 7, 4],
//   },
//   {
//     hunter_id: 35,
//     monster_id: [12, 17, 12, 1, 3, 17, 19, 14, 11, 14],
//   },
//   {
//     hunter_id: 36,
//     monster_id: [9, 6, 10, 4, 14, 9, 8, 5, 1, 12, 19],
//   },
//   {
//     hunter_id: 37,
//     monster_id: [18, 3, 17, 12, 19, 14, 2, 12, 2, 6, 4, 11, 17, 20, 5, 9],
//   },
//   {
//     hunter_id: 38,
//     monster_id: [
//       16, 6, 19, 8, 20, 19, 18, 7, 12, 7, 17, 19, 4, 9, 18, 3, 1, 11, 5,
//     ],
//   },
//   {
//     hunter_id: 39,
//     monster_id: [10, 9, 9, 4, 3, 15, 2, 17, 16, 10, 2, 6, 7],
//   },
//   {
//     hunter_id: 40,
//     monster_id: [
//       15, 5, 13, 18, 3, 19, 4, 6, 6, 11, 6, 2, 14, 14, 7, 3, 14, 10, 8, 3,
//     ],
//   },
//   // Your original seed data here
// ]

// const transformedSeedData = transformSeedData(originalSeedData)

// console.log(transformedSeedData)

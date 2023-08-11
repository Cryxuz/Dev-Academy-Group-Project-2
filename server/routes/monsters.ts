import express from 'express'

// import { continent, capitalise, validateContinent } from './helpers.ts'
import * as db from '../db/index.ts'

const router = express.Router()
export default router
// get monster/continent
// SHOULD THIS BE BY ID?

// router.get('/:continent/monsters', async (req, res) => {
//   const location = req.params.continent
//   const regionalMonsters = await db.getMonsterByLocation(location)
router.get('/monsters', async (req, res) => {
  const monsters = await db.getAllMonsters()

  res.render('allMonsters', { monsters }) // add monster.hbs in render
})

router.get('/:id/monster', async (req, res) => {
  const id = Number(req.params.id)
  const monsterDetails = await db.getMonsterDetails(id)

  const monsterObj = monsterDetails[0]
  res.render('monsterDetails', monsterObj) // add monster.hbs in render
})

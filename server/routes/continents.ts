import express from 'express'

// import { validateContinent } from './helpers.ts'
// import * as db from '../db/index.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  res.render('continent')
})
// GET / by continent
/*
router.get('/:continent', async (req, res) => {
  const continent = validateContinent(req.params.continent)
  const regionalMonsters = await db.getMonsterByLocation(location)
  const viewData = { 
    continent : continent,
    monsters = regionalMonsters
  }
    
  res.render('showMonstersByContinent', viewData)
}) */

// showMonstersByContinent needs HBS

export default router

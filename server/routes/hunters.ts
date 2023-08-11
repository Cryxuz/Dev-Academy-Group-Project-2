import express from 'express'

import * as db from '../db/index.ts'

//modify for monster hunters

const router = express.Router()

router.get('/hunters', async (req, res) => {
  const huntersList = await db.getAllHunters()
  res.render('allHunters', { huntersList })
})

router.get('/:id/hunter', async (req, res) => {
  const id = Number(req.params.id)
  const hunterDetails = await db.getHunterDetails(id)

  const hunterObj = hunterDetails[0]
  console.log(hunterDetails)
  const viewData = {
    hunter: hunterObj,
    monster: hunterDetails,
  }
  res.render('hunterDetails', viewData) // add monster.hbs in render
})

// fix me
router.get('/:continent/hunters', async (req, res) => {
  const location = req.params.continent

  const huntersByRegion = await db.getHuntersByLocation(location)
  const viewData = {
    hunters: huntersByRegion,
    location: location,
  }
  res.render('regionalHunters', viewData)
  console.log(huntersByRegion)
})

router.get('/add', async (req, res) => {
  res.render('addHunter')
})

router.post('/add', async (req, res) => {
  const { name, location, kills, description, price } = req.body
  await db.addHunter({ name, location, kills, description, price })
  res.redirect('/hunters/hunters')
})

export default router

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
  res.render('hunterDetails', hunterObj) // add monster.hbs in render
})

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

// GET /locations
// router.get('/', (req, res) => {
//   // TODO: Replace this with all of the locations in the database
//   const locations = [
//     {
//       id: 1,
//       name: 'TangleStage',
//       description:
//         'Not the biggest stage, but perhaps the most hip. Not the biggest stage, but perhaps the most hip. Not the biggest stage, but perhaps the most hip.',
//     },
//     {
//       id: 2,
//       name: 'Yella Yurt',
//       description:
//         "It's a freakin' yurt! Get in here! It's a freakin' yurt! Get in here! It's a freakin' yurt! Get in here! It's a freakin' yurt! Get in here!",
//     },
//   ]

//   const viewData = { locations }
//   res.render('showLocations', viewData)
// })

// GET /locations/4/edit
// router.get('/:id/edit', (req, res) => {
//   const id = Number(req.params.id)

//   // TODO: Get the location based on its id and replace this viewData
//   const viewData = {
//     id: id,
//     name: 'TangleStage',
//     description:
//       'Not the biggest stage, but perhaps the most hip. Not the biggest stage, but perhaps the most hip. Not the biggest stage, but perhaps the most hip.',
//   }

//   res.render('editLocation', viewData)
// })

// // POST /locations/edit
// router.post('/edit', (req, res) => {
//   // ASSISTANCE: So you know what's being posted ;)
//   // const { id, name, description } = req.body

//   // TODO: Update the location in the database based on its id

//   res.redirect('/locations')
// })

export default router

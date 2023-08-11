import knexFile from './knexfile.js'
import knex from 'knex'
//import type { Location, LocationData } from '../../models/Location.ts'
//import type { Event, EventData, EventWithLocation } from '../../models/Event.ts'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
const db = knex.default(config)

// create getAllMonsters
// getMonsterByLocation -- getMonsterByLocation(location) is called in schedules TS
// get monstersByID
// next 3 points = first stretch
// findMonsterHuntersInArea
// getAllMonsterHunters
// getMonsterHuntersByID
// post route stretches - edit monster, add monster, find hunter in area

export async function getMonsterDetails(id: number) {
  const result = await db('monsters').where('id', id).select()

  return result
}
export async function getHunterDetails(id: number) {
  const result = await db('hunters').where('id', id).select()

  return result
}

export async function getAllHunters() {
  const result = await db('hunters').select('*') //.where('location', location)
  return result
}
export async function getHuntersByLocation(location: string) {
  const result = await db('hunters')
    .select('name', 'price')
    .where('location', location)
  return result
}

// // // GET /schedule/friday
// router.get('/:day', async (req, res) => {
//   const day = validateDay(req.params.day)

//   // TODO: Replace the hard-coded `events` array in the viewData with a set of events from the
//   // database. Do this by selecting events that have a "day" field matching the `day` route parameter.
//   // Continue to supply the `day` as a property of the viewData, alongside the array of events.
//   const events = await db.getEventsByDay(day)
//   const viewData = {
//     day: day,
//     events,
//   }
//   console.log(events)
//   res.render('showDay', viewData)
// })
// // TODO: write some more database functions
// export async function getEventsByDay(day: string) {
//   const result = await db('events')
//     .join('locations', 'events.location_id', 'locations.id')
//     .select(
//       'events.name as eventName',
//       'events.description as description',
//       'locations.name as locationName',
//       'events.time as time'
//     )
//     .where('events.day', day)
//   return result
// }

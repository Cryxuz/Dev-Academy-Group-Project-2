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
export async function getMonsterByLocation(location: string) {
  const result = await db('monsters').where('location', location).select()
  return result
}
export async function getMonsterDetails(id: number) {
  const result = await db('monsters').where('id', id).select()

  return result
}

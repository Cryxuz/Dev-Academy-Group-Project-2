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

export async function getAllMonsters() {
  const result = await db('monsters').select()

  return result
}

export async function getMonsterDetails(id: number) {
  const result = await db('monsters').where('id', id).select()

  return result
}
export async function getHunterDetails(id: number) {
  const result = await db('hunters')
    .leftJoin('decks', 'decks.hunter_id', 'hunters.id')
    .leftJoin('monsters', 'decks.monster_id', 'monsters.id')
    .where('hunters.id', id)
    .select(
      'hunters.id as id',
      'hunters.name as name',
      'hunters.location as location',
      'hunters.description as description',
      'hunters.kills as kills',
      'hunters.price as price',
      'monsters.id as monsterId',
      'monsters.name as monsterName'
    )

  return result
}

export async function getAllHunters() {
  const result = await db('hunters').select('*') //.where('location', location)
  return result
}
export async function getHuntersByLocation(location: string) {
  const result = await db('hunters')
    .select('name', 'price', 'id')
    .where('location', location)
  return result
}

export async function addHunter(hunterData: {
  name: string
  location: string
  kills: string
  description: string
  price: string
}) {
  await db('hunters').insert(hunterData)
}

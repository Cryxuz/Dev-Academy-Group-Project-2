import * as Path from 'node:path'

import express from 'express'
import * as hbs from 'express-handlebars'

import huntersRoutes from './routes/hunters.ts'
import continentsRoutes from './routes/continents.ts'
import monstersRoutes from './routes/monsters.ts'

/*
 * create the server
 *************************/

const server = express()
export default server

/*
 * configure the server
 *************************/

const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))

/*
 * define the routes
 *************************/

server.get('/', (req, res) => {
  res.redirect('/')
})

server.use('/hunters', huntersRoutes)
server.use('/continents', continentsRoutes)
server.use('/monsters', monstersRoutes)

//sceddule to continents and events to monsters
//comment out locatiosn related stuff

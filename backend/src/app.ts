import express, { json } from 'express'
import { router } from './routes'
import socketIo from 'socket.io-client'
import cors from 'cors'
import { Occurrence } from './entities/Occurrence'
import { connection } from './database/connection'
import { deployHeroController } from './useCases/DeployHero'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

const io = socketIo("https://zrp-challenge-socket.herokuapp.com:443")

io.on('occurrence', async (occurrence)  => {
    let teste = new Occurrence(occurrence);
    teste.dangerLevel = occurrence.dangerLevel;
    teste.monsterName = occurrence.monsterName;
    teste.lat = occurrence.location[0].lat;
    teste.lng = occurrence.location[0].lng;

    await connection('ongoing_occurrences').insert([{
        'id': teste.id, 
        'dangerLevel': teste.dangerLevel,
        'monsterName': teste.monsterName,
        'lat': teste.lat,
        'lng': teste.lng,
    }])

    const result = deployHeroController.handle(); 
})

export { app }
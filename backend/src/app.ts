import express, { json } from 'express'
import { router } from './routes'
import socketIo from 'socket.io-client'
import { connection } from './database/connection'
import { Occurrence } from './entities/Occurrence'

const app = express()

app.use(express.json())
app.use(router)

const io = socketIo("https://zrp-challenge-socket.herokuapp.com:443")

io.on('occurrence', async (occurrence)  => {
    let teste = new Occurrence();
    teste.dangerLevel = occurrence.dangerLevel;
    teste.monsterName = occurrence.monsterName;
    teste.lat = occurrence.location[0].lat;
    teste.lng = occurrence.location[0].lng;

    console.log(await connection('ongoing_occurrences').insert([{
        'id': teste.id, 
        'dangerLevel': teste.dangerLevel,
        'monsterName': teste.monsterName,
        'lat': teste.lat,
        'lng': teste.lng,
    }]))
    console.log(teste.lat);
})

export { app }
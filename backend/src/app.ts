import express from 'express'
import { router } from './routes'
import socketIo from 'socket.io-client'

const app = express()

app.use(express.json())
app.use(router)

const io = socketIo("https://zrp-challenge-socket.herokuapp.com:443")

io.on('occurrence', (occurrence)  => {
    console.log(occurrence);
})

export { app }
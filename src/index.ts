import "reflect-metadata"

import express from 'express'

import Router from './routes/routes'

import database from './config/database'

database.initialize()
.then(() => console.log("database connected"))
.catch(console.error)

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const PORT = 3030

app.get('/ping', (_req, res) => {
    console.log('ping')
    res.send('pong')
})

app.listen(PORT, () => {
    console.log('server running on port')
})

app.use('/api', Router)
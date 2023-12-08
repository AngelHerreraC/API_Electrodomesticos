import express from 'express'

import Router from './routes/routes'

const app = express()
app.use(express.json())

const PORT = 3030

app.get('/ping', (_req, res) => {
    console.log('ping')
    res.send('pong')
})

app.listen(PORT, () => {
    console.log('server running on port')
})

app.use('/api', Router)
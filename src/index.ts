import express from 'express'

import dairyRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('ping')
    res.send('pong')
})

app.listen(PORT, () => {
    console.log('')
})

app.use('api/diaries', dairyRouter)
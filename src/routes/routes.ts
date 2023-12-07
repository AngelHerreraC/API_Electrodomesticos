import express from 'express'

const router = express.Router()

router.get('/', (_req, res)=>{
    res.send("a")
})

router.post('/', (_req, res)=>{
    res.send("b")
})

export default router
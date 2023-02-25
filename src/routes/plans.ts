import { Router } from 'express'

const router = Router()

router.post('',(req, res) => {
    return res.json({ hello: "World!"})
})

router.get('', (req, res) => {
    return res.json({ hello: "World!"})
})

module.exports = router
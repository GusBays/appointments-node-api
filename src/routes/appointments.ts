import { Router } from 'express';

const router = Router()

router.post('', (req, res) => {
    return res.json(req.body);
})

router.get('', (req, res) => {
    return res.json({ hello: "World!"})
})

module.exports = router
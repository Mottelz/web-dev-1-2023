const express = require('express')
const router = express.Router()

router.get('/search', (req, res) => {
    const query = req.query.query
    res.json({msg: `We see you're looking for ${query}. We will find it soon.`})
})

router.post('/game', (req, res) => {
    const name = req.body.name
    const designer = req.body.designer
    res.json({msg: 'You tried to create the following game.', game: { name, designer }})
})

module.exports = router
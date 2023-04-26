const express = require('express')
const router = express.Router()
const db = require('../models/database')

router.get('', async (req, res) => {
    const games = await db.getGames()
    res.json(games)
})

module.exports = router
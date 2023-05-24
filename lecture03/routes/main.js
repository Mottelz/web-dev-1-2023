const express = require('express')
const router = express.Router()
const db = require('../models/database')

router.get('/', async (req, res) => {
    const count = await db.getNumberOfGames()
    res.render('index', {
        title: 'Welcome to Gamey!', 
        body: `We currently have ${count} games in our database. Click the button below to start browsing.`
    })
})

module.exports = router
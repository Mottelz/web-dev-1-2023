const express = require('express')
const router = express.Router()
const db = require('../models/database')

router.get('/', (req, res) => {
    res.render('index', {title: 'home', body: 'Welcome to Gamey it\'s a work in progress.'})
})

router.get('/error', async (req, res) => {
     await db.deleteGameById('1234567890')
     res.redirect('/')
})

router.get('/test', (req, res) => {
    res.render('games-multi', {title: 'Games!!!'})
})

module.exports = router
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {title: 'home', body: 'Welcome to Gamey it\'s a work in progress.'})
})

router.get('/error', (req, res) => {
    throw new Error("WHAT ARE YOU DOING?!")
})

module.exports = router
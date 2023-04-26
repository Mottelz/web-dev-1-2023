const express = require('express')
const router = express.Router()
const db = require('../models/database')

router.get('/init', async (req, res) => {
    // add auth check
    await db.initDB()
    res.render('index', { title: 'Setup Complete', body: 'The database has been initialized.'})
})

module.exports = router
const express = require('express')
const router = express.Router()
const db = require('../models/database')

router.get('/games', async (req, res) => {
    const games = await db.getGames()
    res.render('games-multi', {title: 'All Games', games})
})

router.get('/games/search', async (req, res) => {
    const query = req.query.q
    const results = await db.searchGamesByName(query)
    res.render('games-multi', {title: `Results for ${query}`, games: results})
})

router.get('/game/:id', async (req, res) => {
    const id = req.params.id
    const game = await db.getGameById(id)
    res.render('games-single', {title: game.Name, game})
})

router.delete('/game/:id', async (req, res) => {
    const id = req.params.id
    await db.deleteGameById(id)
    res.redirect('/games')
})

router.post('/game', async (req, res) => {
    const newGame = {
        id: req.body.id,
        name: req.body.name,
        minPlayers: req.body.minPlayers,
        minAge: req.body.minAge,
        description: req.body.description ? req.body.description : null,
        link: req.body.link ? req.body.link : null,
        maxPlayers: req.body.maxPlayers ? req.body.maxPlayers : null,
        minPlaytime: req.body.minPlaytime ? req.body.minPlaytime : null,
        maxPlaytime: req.body.maxPlaytime ? req.body.maxPlaytime : null,
    }
    await db.addGame(newGame)
    res.redirect('/games')
})

module.exports = router
const express = require('express')
const router = express.Router()
const db = require('../models/database')

router.get('/games', async (req, res) => {
    const games = await db.getGames()
    res.json(games)
})

router.get('/games/search', async (req, res) => {
    const query = req.query.q
    const results = await db.searchGamesByName(query)
    res.json(results)
})

router.get('/game/:id', async (req, res) => {
    const id = req.params.id
    const game = await db.getGameById(id)
    res.json(game)
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

router.post('/games', async (req, res) => {
    const games = req.body.games
    games.forEach(async game => {
        const newGame = {
            id: game.id,
            name: game.name,
            minPlayers: game.minPlayers,
            minAge: game.minAge,
            description: game.description ? game.description : null,
            link: game.link ? game.link : null,
            maxPlayers: game.maxPlayers ? game.maxPlayers : null,
            minPlaytime: game.minPlaytime ? game.minPlaytime : null,
            maxPlaytime: game.maxPlaytime ? game.maxPlaytime : null,
        }
        await db.addGame(newGame) 
    });
    res.redirect('/games')
})

module.exports = router
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

router.get('/game/add', async (req, res) => {
    res.render('games-add', { title: 'Add a Game'})
})

router.get('/game/delete/:id', async (req, res) => {
    const id = req.params.id
    await db.deleteGameById(id)
    res.redirect('/games')
})

router.get('/game/edit/:id', async (req, res) => {
    const id = req.params.id
    const game = await db.getGameById(id)
    res.render('games-add', { title: `Edit ${game.Name}`, game })
})

router.get('/game/:id', async (req, res) => {
    const id = req.params.id
    const game = await db.getGameById(id)
    if(game) {
        res.render('games-single', {title: game.Name, game})
    } else {
        res.redirect('/games')
    }
})

router.post('/game/edit', async (req, res) => {
    const updatedGame = {
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
    await db.updateGame(updatedGame)
    res.redirect(`/game/${updatedGame.id}`)
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
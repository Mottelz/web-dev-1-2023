const db = require('better-sqlite3')('./models/gamely.db', { verbose: console.log })
const fs = require('fs')
db.pragma('journal_mode = WAL')

exports.initDB = async () => {
    const script = fs.readFileSync('./models/init.sql').toString()
    db.exec(script)
}

// Get all games
exports.getGames = async () => {
    const statment = db.prepare("SELECT * FROM games")
    try {
        const games = await statment.all()
        return games
    } catch(err) {
        console.error(err.message, err.stack)
    }
}

// Get game by id
exports.getGameById = async (id) => {
    const statment = db.prepare("SELECT * FROM games WHERE id = ?")
    try {
        const game = await statment.get(id)
        return game
    } catch(err) {
        console.error(err.message, err.stack)
    }
}

// Search games by names
exports.searchGamesByName = async (query) => {
    const statment = db.prepare("SELECT * FROM games")
    try {
        const games = await statment.all()
        const q = query.toLowerCase()
        return games.filter(game  => game.Name.toLowerCase().includes(q))
    } catch(err) {
        console.error(err.message, err.stack)
    }
}

// Add game 
exports.addGame = async (gameData) => {
    const statment = db.prepare("INSERT INTO games (Name, ID, Description, Link, MinPlayers, MaxPlayers, MinPlaytime, MaxPlaytime, MinAge) VALUES (@name, @id, @description, @link, @minPlayers, @maxPlayers, @minPlaytime, @maxPlaytime, @minAge);")
    try {
        await statment.run(gameData);
    } catch(err) {
        console.error(err.message, err.stack)
    }
}

// Remove game
exports.deleteGameById = async (id) => {
    const statment = db.prepare("DELETE FROM games WHERE id = ?")
    try {
        await statment.run(id)
    } catch(err) {
        console.error(err.message, err.stack)
    }
}


// Get count of games
exports.getNumberOfGames = async () => {
    const statment = db.prepare("SELECT COUNT(*) as count FROM games")
    try {
        const count = await statment.get()['count']
        return count
    } catch (err) {
        console.error(err.message, err.stack)
    }
}
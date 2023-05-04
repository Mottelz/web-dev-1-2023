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
    const games = await statment.all()
    return games
}

// Get game by id
exports.getGameById = async (id) => {
    const statment = db.prepare("SELECT * FROM games WHERE id = ?")
    const game = await statment.get(id)
    return game
}

// Search games by names
exports.searchGamesByName = async (query) => {
    const statment = db.prepare("SELECT * FROM games WHERE name LIKE '%?%'")
    const games = await statment.all(query)
    return games
}

// Add game 
exports.addGame = async (gameData) => {
    const statment = db.prepare("INSERT INTO games (Name, ID, Description, Link, MinPlayers, MaxPlayers, MinPlaytime, MaxPlaytime, MinAge) VALUES (@name, @id, @description, @link, @minPlayers, @maxPlayers, @minPlaytime, @maxPlaytime, @minAge);")
    await statment.run(gameData);
}

// Remove game
exports.deleteGameById = async (id) => {
    const statment = db.prepare("DELETE FROM games WHERE id = ?")
    await statment.run(id)
}
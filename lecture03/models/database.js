const db = require('better-sqlite3')('./models/gamely.db', { verbose: console.log })
const fs = require('fs')
db.pragma('journal_mode = WAL')

exports.initDB = () => {
    const script = fs.readFileSync('./models/init.sql').toString()
    db.exec(script)
};
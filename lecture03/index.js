// imports
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// middleware
app.set('view engine', 'ejs') // use EJS to render
app.set('views', './pages') // templates are in the pages folder
app.use(express.json())

// routers
const games = require('./routes/games')
app.use('/games', games)

app.get('/', (req, res) => {
    res.render('index', {title: 'Welcome', body: 'Welcome to gamey. We are working on it.'})
})

app.get('/json', (req, res) => {
    res.json({msg: 'This is some JSON.'})
})

app.listen(port, () => {
    console.log(`listening at ${port}`)
})
// imports
require('dotenv').config()
const express = require('express')
const CORS = require('cors')
const app = express()
const port = process.env.PORT || 3000


// middleware
app.set('view engine', 'ejs') // use EJS to render
app.set('views', './pages') // templates are in the pages folder
app.use(express.json())
app.use(CORS())


// routers
const gamesRouter = require('./routes/games')
const mainRouter = require('./routes/main')
const adminRouter = require('./routes/admin')
app.use('/', mainRouter)
app.use('/games', gamesRouter)
app.use('/admin', adminRouter)


// 404 handler
app.all('*', (req, res) => {
    res.render('404', {route: req.path, method: req.method})
})


// error handlers
const errorHandler = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).render('index', {title: 'Internal Error', body: err.message})
}
app.use(errorHandler)


app.listen(port, () => {
    console.log(`listening at ${port}`)
})
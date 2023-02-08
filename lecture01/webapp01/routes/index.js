var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/silly', function(req, res, next) {
  res.render('index', { title: 'Knock Knock' });
});

module.exports = router;

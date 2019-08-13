
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.location('photos')
  res.statusCode = 301;
  res.end()
});

module.exports = router;

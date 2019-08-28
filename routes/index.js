
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.location('photos')
  res.statusCode = 301;
  res.end()
});
module.exports = router;

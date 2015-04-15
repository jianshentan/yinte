var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET shopping page. */
router.get('/shop', function(req, res, next) {
  res.render('shop');
});

module.exports = router;

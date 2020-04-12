var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('React should be rendering something over this.');
});

module.exports = router;

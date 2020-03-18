var express = require('express');
var router = express.Router();
var faqData = require("../JSON/faqData");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { faqData });
});

module.exports = router;

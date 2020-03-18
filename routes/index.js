var express = require('express');
var router = express.Router();
// load questions and answers from json file into variable for template engine
var faqData = require("./../JSON/faqData");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { questions: faqData, title: "The Light Source Showcase" });
});

module.exports = router;

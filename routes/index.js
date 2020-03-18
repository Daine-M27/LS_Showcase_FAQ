var express = require('express');
var router = express.Router();
// load questions and answers from json file into variable for template engine
var faqData = require("./../JSON/faqData");
var slideData = require("./../JSON/slideShow");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "The Light Source Showcase", questions: faqData, allSlides: slideData });
});

module.exports = router;

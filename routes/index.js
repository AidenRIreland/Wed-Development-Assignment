var express = require('express');
var router = express.Router();

//home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
//About me
router.get('/', function(req, res, next) {
  res.render('about-me', { title: 'About Me' });
});
//projects
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
//Services
router.get('/', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
//Contact
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;

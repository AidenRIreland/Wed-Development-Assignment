var express = require('express');
var router = express.Router();
//About me
router.get('/', function(req, res, next) {
    res.render('about-me', { title: 'About Me' });
  });
module.exports = router;
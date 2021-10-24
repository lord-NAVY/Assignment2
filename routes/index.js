//Ravneet Singh
//College id - 301175326
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});
/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});
/* GET About page. */
router.get('/about', function (req, res, next) {
  res.render('index', { title: 'About Us', page: 'about' });
});
/* GET Product page. */
router.get('/products', function (req, res, next) {
  res.render('index', { title: 'projects', page: 'projects' });
});
/* GET Services page. */
router.get('/services', function (req, res, next) {
  res.render('index', { title: 'Our Services', page: 'services' });
});
/* GET About Us page. */
router.get('/about', function (req, res, next) {
  res.render('index', { title: 'About Us', page: 'about' });
});
/* GET Contact us page. */
router.get('/contact', function (req, res, next) {
  res.render('index', { title: 'Contact Us', page: 'contact' });
});

module.exports = router;

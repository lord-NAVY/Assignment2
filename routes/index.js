//Ravneet Singh
//College id - 301175326
var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

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
  res.render('about', { title: 'About Us', page: 'about' });
});
/* GET Product page. */
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'projects', page: 'projects' });
});
/* GET Services page. */
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Our Services', page: 'services' });
});
/* GET Contact us page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'contact', page: 'contact' });
});
/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;

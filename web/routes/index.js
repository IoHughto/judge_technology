var express = require('express');
var router = express.Router();
var passport = require('passport');
var Strategy = require('passport-local').Strategy;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'judge.technology', user: req.user });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'judge.technology' });
});

router.get('/login',
function(req, res){
    res.render('login');
});

router.post('/login',
passport.authenticate('local', { failureRedirect: '/login' }),
function(req, res) {
    res.redirect('/feedback');
});

router.get('/feedback',
require('connect-ensure-login').ensureLoggedIn(),
function(req, res){
    res.render('feedback', { user: req.user });
});

module.exports = {
    router: router,
    passport: passport,
    Strategy: Strategy};

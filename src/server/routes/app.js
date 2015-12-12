var express = require('express');
var passport = require('passport');

var router = express.Router();

router.route('*').get((req, res) => {
    res.render('app.jsx');
});

module.exports = router;

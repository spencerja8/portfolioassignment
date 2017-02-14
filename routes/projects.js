/**
 * Created by Spencer on 2/13/2017.
 */

var express = require('express');
var router = express.Router();

/* GET the index page and input variables */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Projects page' });
});

module.exports = router;
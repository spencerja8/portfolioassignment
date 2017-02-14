/**
 * Created by Spencer on 2/13/2017.
 */

var express = require('express');
var router = express.Router();

/* GET the index page and input variables */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
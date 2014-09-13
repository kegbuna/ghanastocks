var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('app', { title: 'Express' });
});

/* Get Ghana Stocks */
router.get('/ghana', function (req, res)
{
    res.render('app');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var http = require('http');

var apiHost = "dev.kwayisi.org";
var apiBasePath = "/apis/gse";
var apiCallback = function (response)
{
    var data = '';
    console.log("API is calling back");
    response.on('data', function(chunk)
    {
        data+= chunk;
    });

    response.on('end', function(chunk)
    {
        console.log(data);
    });
};

/* GET home page. */
router.get('/', function(req, res) {
    res.send('Ghana Stock API is running. This server mirrors data from the great kwayisi.org');
});

router.get('/equities', function(req, res) {

    var data = '';

    http.get('http://dev.kwayisi.org/apis/gse/equities', function(response)
    {
        response.on('data', function(chunk)
        {
            data += chunk;
        });

        response.on('end', function()
        {
            res.send(data);
        });
    });
});

router.get('/equities/:symbol', function(req, res) {

    var data = '';

    http.get('http://dev.kwayisi.org/apis/gse/equities/' + req.params.symbol, function(response)
    {
        response.on('data', function(chunk)
        {
            data += chunk;
        });

        response.on('end', function()
        {
            res.send(data);
        });
    });

});

router.get('/live', function(req, res) {

    var data = '';

    http.get('http://dev.kwayisi.org/apis/gse/live', function(response)
    {
        response.on('data', function(chunk)
        {
            data += chunk;
        });

        response.on('end', function()
        {
            res.send(data);
        });
    });

});

router.get('/live/:symbol', function(req, res) {

    var data = '';

    http.get('http://dev.kwayisi.org/apis/gse/live/' + req.params.symbol, function(response)
    {
        response.on('data', function(chunk)
        {
            data += chunk;
        });

        response.on('end', function()
        {
            res.send(data);
        });
    });
});

module.exports = router;

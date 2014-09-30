var express = require('express');
var router = express.Router();
var http = require('http');

var apiHost = "dev.kwayisi.org";
var apiBasePath = "/apis/gse";

var apiCallback = function (req, res, response)
{
    var data = '';
    response.on('data', function(chunk)
    {
        data += chunk;
    });

    response.on('end', function()
    {
        if (response.statusCode == 500)
        {
            data = {};
            data.type = "communication";
            data.source = req.route.path;
            data.message = "Error communicating with the source API Endpoint. Please try again.";
            res.statusCode = 500;
            res.send(data);
        }
        else
        {
            res.send(data);
        }
    });
};

/* GET home page. */
router.get('/', function(req, res) {
    res.send('Ghana Stock API is running. This server mirrors data from the great kwayisi.org');
});

router.get('/equities', function(req, res) {

    http.get('http://dev.kwayisi.org/apis/gse/equities', function(response)
    {
        apiCallback(req, res, response);
    });
});

router.get('/equities/:symbol', function(req, res) {

    http.get('http://dev.kwayisi.org/apis/gse/equities/' + req.params.symbol, function(response)
    {
        apiCallback(req, res, response);
    });

});

router.get('/live', function(req, res) {

    http.get('http://dev.kwayisi.org/apis/gse/live', function(response)
    {
        apiCallback(req, res, response);
    });

});

router.get('/live/:symbol', function(req, res) {

    http.get('http://dev.kwayisi.org/apis/gse/live/' + req.params.symbol, function(response)
    {
        apiCallback(req, res, response);
    });
});

module.exports = router;

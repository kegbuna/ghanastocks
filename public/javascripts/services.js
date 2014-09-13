angular.module('ghanastocks.services', [])
.factory('Stocks', function($http)
{
    var stockEndPoint = "/api/";

    return {
        equities: function(symbol)
        {
            if (typeof symbol === "undefined")
            {
                symbol = "";
            }
            return $http(
            {
                url: stockEndPoint + "/equities/" + symbol,
                method: "GET"
            });
        },
        live: function (symbol)
        {
            if (typeof symbol === "undefined")
            {
                symbol = "";
            }
            return $http(
            {
                url: stockEndPoint + "/live/" + symbol,
                method: "GET"
            });
        }
    };
});

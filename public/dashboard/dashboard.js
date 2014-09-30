'use strict';

var dashModule = angular.module('ghanastocks.dashboard', ['ngRoute', 'ghanastocks.services']);

dashModule.config(['$routeProvider', function ($routeProvider)
{
    $routeProvider.when('/dashboard', {
        templateUrl: 'dashboard/dashboard.html',
        controller: 'dashboardCtrl'
    });
}])

.controller('dashboardCtrl', ['$scope','Stocks', function (sc, Stocks)
{
<<<<<<< HEAD
    /*start off scope with some values to prevent errors like height="NaN"*/
    sc.live = {};
    sc.equities = {};
    sc.equities.length = 0;
    sc.errorMessage = {};

    performCollection();
    setInterval(function ()
=======
    var $stockTable = $('#stockTable').DataTable(
    {
        columns:
        [
            {"data" : "name"},
            {"data" : "price"}
        ]
    });
    Stocks.live().success(function(response)
>>>>>>> c7b16ff64db58c9ca79bcdb56fd21557aeddfc6c
    {
        performCollection();
    }, 90000);

    function performCollection()
    {
<<<<<<< HEAD
        sc.errorMessage.equities = "";
        var onError = function(response)
        {
            console.log(response);
            sc.errorMessage.equities = response.message;
        };

        Stocks.live().success(function(response)
        {
            sc.live = response;
        }).error(onError);

        Stocks.equities().success(function (response)
        {

            sc.equities = response;

        }).error(onError);

    }
}]);

dashModule.directive("barChart", function ($window)
{
    return {
        restrict: "EA",
        template: "<svg></svg>",
        link: function(scope, elem, attrs)
        {
            var d3 = $window.d3;

        }
    };
});
=======
        sc.equities = response;
        $stockTable.rows.add(sc.equities);
        $stockTable.draw();
        console.log($stockTable);
    });
}]);
>>>>>>> c7b16ff64db58c9ca79bcdb56fd21557aeddfc6c

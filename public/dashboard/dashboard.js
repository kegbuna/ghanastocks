'use strict';

angular.module('ghanastocks.dashboard', ['ngRoute', 'ghanastocks.services'])

.config(['$routeProvider', function ($routeProvider)
{
    $routeProvider.when('/dashboard', {
        templateUrl: 'dashboard/dashboard.html',
        controller: 'dashboardCtrl'
    });
}])

.controller('dashboardCtrl', ['$scope','Stocks', function (sc, Stocks)
{
    var $stockTable = $('#stockTable').DataTable(
    {
        columns:
        [
            {"data" : "name"},
            {"data" : "price"}
        ]
    });
    Stocks.live().success(function(response)
    {
        sc.live = response;
    });

    Stocks.equities().success(function (response)
    {
        sc.equities = response;
        $stockTable.rows.add(sc.equities);
        $stockTable.draw();
        console.log($stockTable);
    });
}]);
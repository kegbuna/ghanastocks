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
    var $stockTable = $('#stockTable').dataTable(
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
        $stockTable.add(sc.equities);
        $stockTable.fnDraw();
        console.log($stockTable);
    });
}]);
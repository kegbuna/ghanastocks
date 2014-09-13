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
    Stocks.live();
}]);
'use strict';
// Declare app level module which depends on views, and components
angular.module('ghanastocks', [
        'ngRoute',
        'mm.foundation',
        'ghanastocks.services',
        'ghanastocks.dashboard'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/dashboard'});
    }]);

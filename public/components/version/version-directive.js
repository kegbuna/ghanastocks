'use strict';

angular.module('easy-res.version.version-directive', [])

    .directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]);

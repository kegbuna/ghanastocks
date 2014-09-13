'use strict';

angular.module('easy-res.version', [
        'easy-res.version.interpolate-filter',
        'easy-res.version.version-directive'
    ])

    .value('version', '0.1');

'use strict';

describe('easy-res.version module', function () {
    beforeEach(module('easy-res.version'));

    describe('version service', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.1');
        }));
    });
});

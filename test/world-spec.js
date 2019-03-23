var World = require('../app/world').World;
var assert = require('assert');

describe('World', function () {
    it('creates a world with valid dimensions', function () {
        var w = new World(15, 20);
        assert.equal(w.width, 15);
        assert.equal(w.height, 20);
    });

    [[2, true], [-1, false], [10, false]].forEach(function (testItem) {
        it(`should determine whether ${testItem[0]} on map correctly`, function () {
            var sut = new World(5, 5);
            assert.equal(sut.isValidLatitude(testItem[0]), testItem[1]);
        });
    });
});
